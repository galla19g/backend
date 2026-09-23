import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenService } from './orden.service.js';
import { OrdenController } from './orden.controller.js';
import { Orden } from './entities/orden.entity.js';
import { Vehiculo } from '../vehiculo/entities/vehiculo.entity.js';
import { Mecanico } from '../mecanico/entities/mecanico.entity.js';
import { Servicio } from './entities/servicio.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, Vehiculo, Mecanico, Servicio])],
  controllers: [OrdenController],
  providers: [OrdenService],
  exports: [OrdenService],
})
export class OrdenesServicioModule {}
