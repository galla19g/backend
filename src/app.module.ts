import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe'
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './database/database.module.js';
import { MarcaModule } from './marcas-modelos/marca.module.js';
import { VehiculoModule } from './vehiculo/vehiculo.module.js';
import { MecanicoModule } from './mecanico/mecanico.module.js';
import { OrdenesServicioModule } from './ordenes-servicio/orden.module.js';
import { ModeloModule } from './marcas-modelos/modelo.module.js'
import { ServicioModule } from './ordenes-servicio/servicio.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();
@Module({
  imports: [
    DatabaseModule,
    MarcaModule,
    VehiculoModule,
    MecanicoModule,
    OrdenesServicioModule,
    ModeloModule,
    ServicioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
