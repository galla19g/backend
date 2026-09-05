import { Controller, Get, Post, Body, Param, } from '@nestjs/common';
import { ModeloService } from './modelo.service.js';
import { CreateModeloDto } from './dto/create-modelo.dto.js';
import { Modelos } from './entities/modelo.entity.js';

@Controller('modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModeloService) { }

  @Get()
  async findAll(): Promise<Modelos[]> {
    return await this.modelosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Modelos> {
    return await this.modelosService.findOne(+id);
  }

  @Post()
  async create(@Body() createModeloDto: CreateModeloDto): Promise<Modelos>{
    return await this.modelosService.create(createModeloDto);
  }
}
