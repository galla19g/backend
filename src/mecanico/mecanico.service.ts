import { Injectable,ConflictException,NotFoundException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateMecanicoDto } from './dto/create-mecanico.dto.js';
import { UpdateMecanicoDto } from './dto/update-mecanico.dto.js';
import { Mecanico } from './entities/mecanico.entity.js';

@Injectable()
export class MecanicoService {
  constructor(
    @InjectRepository(Mecanico)
    private readonly mecanicoRepository: Repository<Mecanico>,
  ){} 

  async create(createMecanicoDto: CreateMecanicoDto) {
    const nuevoMecanico = this.mecanicoRepository.create(createMecanicoDto)
    return await this.mecanicoRepository.save(nuevoMecanico);
  }

  async findAll(): Promise<Mecanico[]> {
    return await this.mecanicoRepository.find()
  }

  async findOne(id: number): Promise<Mecanico> {
    const mecanico = await this.mecanicoRepository.findOneBy({ id });
    
    if (!mecanico) {
      throw new NotFoundException(`El Mecanico con el id:${id} no existe`);
    }
    
    return mecanico;
  }
}
