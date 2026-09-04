import { Module } from '@nestjs/common';
import { OrdenesServicioService } from './ordenes-servicio.service.js';
import { OrdenesServicioController } from './ordenes-servicio.controller.js';

@Module({
  controllers: [OrdenesServicioController],
  providers: [OrdenesServicioService],
})
export class OrdenesServicioModule {}
