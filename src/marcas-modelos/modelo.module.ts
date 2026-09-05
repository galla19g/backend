import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloService } from './modelo.service.js';
import { ModelosController } from './modelo.controller.js';
import { Modelos } from './entities/modelo.entity.js';

@Module({
  controllers: [ModelosController],
  providers: [ModeloService],
  imports: [TypeOrmModule.forFeature([Modelos])],
  exports: [ModeloService]
})
export class ModeloModule { }
