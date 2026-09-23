import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicioService } from './servicio.service.js';
import { Servicio } from './entities/servicio.entity.js';
import { CreateServicioDto } from './dto/create-servicio.dto.js';
import { UpdateServicioDto } from './dto/update-servicio.dto.js';

@Controller('servicio')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get()
  async findAll(): Promise<Servicio[]> {
    return await this.servicioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Servicio> {
    return await this.servicioService.findOne(+id);
  }

  @Post()
  async create(@Body() createServicioDto: CreateServicioDto): Promise<Servicio> {
    return await this.servicioService.create(createServicioDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateServicioDto: UpdateServicioDto,
  ): Promise<Servicio> {
    return await this.servicioService.update(+id, updateServicioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return await this.servicioService.remove(+id);
  }
}
