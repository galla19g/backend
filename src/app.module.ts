import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe'
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DatabaseModule } from './database/database.module.js';
import { MarcasModelosModule } from './marcas-modelos/marcas-modelos.module.js';
import { VehiculoModule } from './vehiculo/vehiculo.module.js';
import { MecanicoModule } from './mecanico/mecanico.module.js';
import { OrdenesServicioModule } from './ordenes-servicio/ordenes-servicio.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'backend',
    }),
    DatabaseModule,
    MarcasModelosModule,
    VehiculoModule,
    MecanicoModule,
    OrdenesServicioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
