import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarcasModelosService } from './marcas-modelos.service.js';
import { CreateMarcasModeloDto } from './dto/create-marcas-modelo.dto.js';
import { UpdateMarcasModeloDto } from './dto/update-marcas-modelo.dto.js';

@Controller('marcas-modelos')
export class MarcasModelosController {
  constructor(private readonly marcasModelosService: MarcasModelosService) {}

  @Post()
  create(@Body() createMarcasModeloDto: CreateMarcasModeloDto) {
    return this.marcasModelosService.create(createMarcasModeloDto);
  }

  @Get()
  findAll() {
    return this.marcasModelosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasModelosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarcasModeloDto: UpdateMarcasModeloDto) {
    return this.marcasModelosService.update(+id, updateMarcasModeloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasModelosService.remove(+id);
  }
}
