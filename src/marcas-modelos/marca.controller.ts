import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MarcaService } from './marca.service.js';
import { CreateMarcaDto } from './dto/create-marca.dto.js';
import { Marca } from './entities/marca.entity.js';

@Controller('marca')
export class MarcaController {
  constructor(private readonly marcaService: MarcaService) { }

  @Get()
  async findAll(): Promise<Marca[]> {
    return await this.marcaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Marca> {
    return this.marcaService.findOne(+id);
  }

  @Post()
  async create(@Body() createMarcaDto: CreateMarcaDto): Promise<Marca>{
    return this.marcaService.create(createMarcaDto);
  }
}
