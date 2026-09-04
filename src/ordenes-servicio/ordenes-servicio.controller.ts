import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenesServicioService } from './ordenes-servicio.service.js';
import { CreateOrdenesServicioDto } from './dto/create-ordenes-servicio.dto.js';
import { UpdateOrdenesServicioDto } from './dto/update-ordenes-servicio.dto.js';

@Controller('ordenes-servicio')
export class OrdenesServicioController {
  constructor(private readonly ordenesServicioService: OrdenesServicioService) {}

  @Post()
  create(@Body() createOrdenesServicioDto: CreateOrdenesServicioDto) {
    return this.ordenesServicioService.create(createOrdenesServicioDto);
  }

  @Get()
  findAll() {
    return this.ordenesServicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenesServicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenesServicioDto: UpdateOrdenesServicioDto) {
    return this.ordenesServicioService.update(+id, updateOrdenesServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenesServicioService.remove(+id);
  }
}
