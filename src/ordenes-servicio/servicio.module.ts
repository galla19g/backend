import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service.js';
import { ServicioController } from './servicio.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity.js'

@Module({
  imports: [TypeOrmModule.forFeature([Servicio])],
  controllers: [ServicioController],
  providers: [ServicioService],
  exports: [ServicioService]
})
export class ServicioModule { }
