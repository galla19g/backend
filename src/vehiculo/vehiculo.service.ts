import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehiculo } from './entities/vehiculo.entity.js';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto.js';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto.js';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private readonly vehiculoRepository: Repository<Vehiculo>,
  ){}
  async create(createVehiculoDto: CreateVehiculoDto) {
    const nuevoVehiculo = this.vehiculoRepository.create(createVehiculoDto)
    return await this.vehiculoRepository.save(nuevoVehiculo);
  }

  async findAll(): Promise<Vehiculo[]> {
    return await this.vehiculoRepository.find();
  }

  async findOne(id: number):Promise<Vehiculo> {
    const vehiculo = await this.vehiculoRepository.findOneBy ({ id });

    if (!vehiculo){
      throw new NotFoundException('ElVehiculo con el id: '+ id +' no existe')
    }
    return vehiculo;
  }
}
