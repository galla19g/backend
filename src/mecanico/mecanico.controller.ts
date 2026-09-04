import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MecanicoService } from './mecanico.service.js';
import { Mecanico } from './entities/mecanico.entity.js'
import { CreateMecanicoDto } from './dto/create-mecanico.dto.js';

@Controller('mecanico')
export class MecanicoController {
  constructor(private readonly mecanicoService: MecanicoService) {}

  @Get()
   async findAll(): Promise<Mecanico[]>{
    return await this.mecanicoService.findAll()
   }


  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mecanico>{
    return await this.mecanicoService.findOne(+id);
  }
  
  @Post()
  async create(@Body() createMecanicoDto: CreateMecanicoDto): Promise<Mecanico> {
    return await this.mecanicoService.create(createMecanicoDto);
  }
}
