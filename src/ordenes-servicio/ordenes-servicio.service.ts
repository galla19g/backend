import { Injectable } from '@nestjs/common';
import { CreateOrdenesServicioDto } from './dto/create-ordenes-servicio.dto.js';
import { UpdateOrdenesServicioDto } from './dto/update-ordenes-servicio.dto.js';

@Injectable()
export class OrdenesServicioService {
  create(createOrdenesServicioDto: CreateOrdenesServicioDto) {
    return 'This action adds a new ordenesServicio';
  }

  findAll() {
    return `This action returns all ordenesServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordenesServicio`;
  }

  update(id: number, updateOrdenesServicioDto: UpdateOrdenesServicioDto) {
    return `This action updates a #${id} ordenesServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordenesServicio`;
  }
}
