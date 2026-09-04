import { Injectable } from '@nestjs/common';
import { CreateMarcasModeloDto } from './dto/create-marcas-modelo.dto.js';
import { UpdateMarcasModeloDto } from './dto/update-marcas-modelo.dto.js';

@Injectable()
export class MarcasModelosService {
  create(createMarcasModeloDto: CreateMarcasModeloDto) {
    return 'This action adds a new marcasModelo';
  }

  findAll() {
    return `This action returns all marcasModelos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marcasModelo`;
  }

  update(id: number, updateMarcasModeloDto: UpdateMarcasModeloDto) {
    return `This action updates a #${id} marcasModelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} marcasModelo`;
  }
}
