import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { MecanicoService } from './mecanico.service.js';
import { MecanicoController } from './mecanico.controller.js';
import { Mecanico } from './entities/mecanico.entity.js';


@Module({
  imports: [TypeOrmModule.forFeature([Mecanico])],
  controllers: [MecanicoController],
  providers: [MecanicoService],
  exports: [MecanicoService]
})
export class MecanicoModule {}
