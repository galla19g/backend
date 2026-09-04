import { Module } from '@nestjs/common';
import { MarcasModelosService } from './marcas-modelos.service.js';
import { MarcasModelosController } from './marcas-modelos.controller.js';

@Module({
  controllers: [MarcasModelosController],
  providers: [MarcasModelosService],
})
export class MarcasModelosModule {}
