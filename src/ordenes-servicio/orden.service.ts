import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateOrdenDto } from './dto/create-orden.dto.js';
import { UpdateOrdenDto } from './dto/update-orden.dto.js';
import { Orden } from './entities/orden.entity.js';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity.js';
import { Mecanico } from '../mecanico/entities/mecanico.entity.js';
import { Servicio } from './entities/servicio.entity.js';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepository: Repository<Orden>,
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
    @InjectRepository(Mecanico)
    private readonly mecanicoRepository: Repository<Mecanico>,
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  async create(createOrdenDto: CreateOrdenDto): Promise<Orden> {
    const { vehiculo_id, mecanico_id, servicios: serviciosIds, ...ordenData } = createOrdenDto;

    // Validar que el vehículo exista
    const vehiculo = await this.vehiculoRepository.findOneBy({ id: vehiculo_id });
    if (!vehiculo) {
      throw new NotFoundException(`El vehículo con el id: ${vehiculo_id} no existe`);
    }

    // Validar mecánico si viene especificado
    let mecanico: Mecanico | null = null;
    if (mecanico_id) {
      mecanico = await this.mecanicoRepository.findOneBy({ id: mecanico_id });
      if (!mecanico) {
        throw new NotFoundException(`El mecánico con el id: ${mecanico_id} no existe`);
      }
    }

    // Buscar y vincular servicios si vienen especificados
    let servicios: Servicio[] = [];
    if (serviciosIds && serviciosIds.length > 0) {
      servicios = await this.servicioRepository.findBy({ id: In(serviciosIds) });
    }

    // Calcular el total automáticamente si no se envía manualmente
    let total = createOrdenDto.total;
    if (total === undefined || total === null) {
      total = servicios.reduce((acc, s) => acc + Number(s.precio || 0), 0);
    }

    const nuevaOrden = this.ordenRepository.create({
      ...ordenData,
      total,
      vehiculo,
      mecanico: mecanico ?? undefined,
      servicios,
    });

    return await this.ordenRepository.save(nuevaOrden);
  }

  async findAll(): Promise<Orden[]> {
    return await this.ordenRepository.find({
      relations: {
        vehiculo: true,
        mecanico: true,
        servicios: true,
      },
    });
  }

  async findOne(id: number): Promise<Orden> {
    const orden = await this.ordenRepository.findOne({
      where: { id },
      relations: {
        vehiculo: true,
        mecanico: true,
        servicios: true,
      },
    });

    if (!orden) {
      throw new NotFoundException(`La orden con el id: ${id} no existe`);
    }
    return orden;
  }

  async update(id: number, updateOrdenDto: UpdateOrdenDto): Promise<Orden> {
    const orden = await this.findOne(id);

    const { vehiculo_id, mecanico_id, servicios: serviciosIds, ...ordenData } = updateOrdenDto;

    if (vehiculo_id !== undefined) {
      const vehiculo = await this.vehiculoRepository.findOneBy({ id: vehiculo_id });
      if (!vehiculo) {
        throw new NotFoundException(`El vehículo con el id: ${vehiculo_id} no existe`);
      }
      orden.vehiculo = vehiculo;
    }

    if (mecanico_id !== undefined) {
      if (mecanico_id === null) {
        orden.mecanico = null as any;
      } else {
        const mecanico = await this.mecanicoRepository.findOneBy({ id: mecanico_id });
        if (!mecanico) {
          throw new NotFoundException(`El mecánico con el id: ${mecanico_id} no existe`);
        }
        orden.mecanico = mecanico;
      }
    }

    if (serviciosIds !== undefined) {
      if (serviciosIds.length > 0) {
        orden.servicios = await this.servicioRepository.findBy({ id: In(serviciosIds) });
      } else {
        orden.servicios = [];
      }

      // Si no se especificó un total manual en la actualización, recalcular con los nuevos servicios
      if (updateOrdenDto.total === undefined) {
        orden.total = orden.servicios.reduce((acc, s) => acc + Number(s.precio || 0), 0);
      }
    }

    Object.assign(orden, ordenData);

    return await this.ordenRepository.save(orden);
  }

  async remove(id: number): Promise<{ message: string }> {
    const orden = await this.findOne(id);
    await this.ordenRepository.remove(orden);
    return { message: `La orden con el id: ${id} fue eliminada correctamente` };
  }
}
