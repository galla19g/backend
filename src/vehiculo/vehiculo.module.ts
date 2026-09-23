import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service.js';
import { VehiculoController } from './vehiculo.controller.js';
import { Vehiculo } from './entities/vehiculo.entity.js'
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Vehiculo])],
  controllers: [VehiculoController],
  providers: [VehiculoService],
  exports: [VehiculoService]
})
export class VehiculoModule {}
