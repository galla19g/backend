import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenService } from './orden.service.js';
import { CreateOrdenDto } from './dto/create-orden.dto.js';
import { UpdateOrdenDto } from './dto/update-orden.dto.js';
import { Orden } from './entities/orden.entity.js';

@Controller('ordenes-servicio')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Post()
  async create(@Body() createOrdenDto: CreateOrdenDto): Promise<Orden> {
    return await this.ordenService.create(createOrdenDto);
  }

  @Get()
  async findAll(): Promise<Orden[]> {
    return await this.ordenService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Orden> {
    return await this.ordenService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrdenDto: UpdateOrdenDto,
  ): Promise<Orden> {
    return await this.ordenService.update(+id, updateOrdenDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    return await this.ordenService.remove(+id);
  }
}
