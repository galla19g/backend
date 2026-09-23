import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service.js';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto.js';
import { Vehiculo } from './entities/vehiculo.entity.js'

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Get()
  async findAll(): Promise<Vehiculo[]>{
    return this.vehiculoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vehiculo> {
    return this.vehiculoService.findOne(+id);
  }

  @Post()
  async create(@Body() createVehiculoDto: CreateVehiculoDto): Promise<Vehiculo> {
    return this.vehiculoService.create(createVehiculoDto);
  }

}
