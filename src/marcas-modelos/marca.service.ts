import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from  'typeorm'; 
import { CreateMarcaDto } from './dto/create-marca.dto.js';
import { Marca } from './entities/marca.entity.js';

@Injectable()
export class MarcaService {
  constructor (
    @InjectRepository(Marca)
    private readonly marcaRepository: Repository<Marca>,
  ){}
  async create(createMarcaDto: CreateMarcaDto){
    const NuevaMarca = this.marcaRepository.create(createMarcaDto)
    return await this.marcaRepository.save(NuevaMarca)
  }

  async findAll(): Promise<Marca[]> {
    return this.marcaRepository.find()
  }

  async findOne(id: number): Promise<Marca> {
    const marca = await this.marcaRepository.findOneBy({ id });

    if (!marca){
      throw new NotFoundException('La marca que estas buscando' + id +'no existe')
    } 
    return marca;
  }
}
