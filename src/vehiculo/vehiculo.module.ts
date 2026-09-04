import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service.js';
import { VehiculoController } from './vehiculo.controller.js';

@Module({
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}
