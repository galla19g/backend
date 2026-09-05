import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service.js';
import { MarcaController } from './marca.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity.js'
@Module({
  controllers: [MarcaController],
  providers: [MarcaService],
  imports: [TypeOrmModule.forFeature([Marca])],
  exports: [MarcaService]
})
export class MarcaModule { }
