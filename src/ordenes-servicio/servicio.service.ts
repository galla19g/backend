import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicioDto } from './dto/create-servicio.dto.js';
import { UpdateServicioDto } from './dto/update-servicio.dto.js';
import { Servicio } from './entities/servicio.entity.js';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,
  ) {}

  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    const nuevoServicio = this.servicioRepository.create(createServicioDto);
    return await this.servicioRepository.save(nuevoServicio);
  }

  async findAll(): Promise<Servicio[]> {
    return await this.servicioRepository.find();
  }

  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.servicioRepository.findOneBy({ id });

    if (!servicio) {
      throw new NotFoundException('El servicio con el id: ' + id + ' no existe');
    }
    return servicio;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    const servicio = await this.findOne(id);
    this.servicioRepository.merge(servicio, updateServicioDto);
    return await this.servicioRepository.save(servicio);
  }

  async remove(id: number): Promise<{ message: string }> {
    const servicio = await this.findOne(id);
    await this.servicioRepository.remove(servicio);
    return { message: `El servicio con el id: ${id} fue eliminado correctamente` };
  }
}
