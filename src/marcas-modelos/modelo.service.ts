import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModeloDto } from './dto/create-modelo.dto.js';
import { Modelos } from './entities/modelo.entity.js'

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelos)
    private readonly modeloRepository: Repository<Modelos>,
  ){}
  async create(createModeloDto: CreateModeloDto) {
    const NuevoModelo = this.modeloRepository.create(createModeloDto)
    return await this.modeloRepository.save(NuevoModelo)
  }

  async findAll(): Promise<Modelos[]> {
    return this.modeloRepository.find()
  }

  async findOne(id: number): Promise<Modelos> {
    const modelo = await this.modeloRepository.findOneBy({ id });

    if (!modelo) {
      throw new NotFoundException('El modelo que buscas con el id:'+id  +' no existe ');
    }
    return modelo;
  }
}