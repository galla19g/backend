import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,ManyToOne,ManyToMany,JoinTable,JoinColumn,type Relation,} from 'typeorm';
import { Vehiculo } from '../../vehiculo/entities/vehiculo.entity.js';
import { Mecanico } from '../../mecanico/entities/mecanico.entity.js';
import { Servicio } from './servicio.entity.js';

export enum EstadoOrden {
  PENDIENTE = 'PENDIENTE',
  EN_PROCESO = 'EN_PROCESO',
  FINALIZADO = 'FINALIZADO',
  ENTREGADO = 'ENTREGADO',
  CANCELADO = 'CANCELADO',
}

@Entity('orden')
export class Orden {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  fechaIngreso: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaEntrega: Date;

  @Column({ type: 'int' })
  kilometraje: number;

  @Column({ type: 'text' })
  motivoIngreso: string;

  @Column({ type: 'text', nullable: true })
  diagnostico: string;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @Column({
    type: 'enum',
    enum: EstadoOrden,
    default: EstadoOrden.PENDIENTE,
  })
  estado: EstadoOrden;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total: number;

  // Relación con Vehículo
  @ManyToOne(() => Vehiculo, { nullable: false })
  @JoinColumn({ name: 'vehiculo_id' })
  vehiculo: Relation<Vehiculo>;

  // Relación con Mecánico
  @ManyToOne(() => Mecanico, { nullable: true })
  @JoinColumn({ name: 'mecanico_id' })
  mecanico: Relation<Mecanico>;

  // Relación Muchos a Muchos con Servicios
  @ManyToMany(() => Servicio, (servicio) => servicio.ordenes)
  @JoinTable({
    name: 'orden_servicios', // Tabla intermedia automática
    joinColumn: { name: 'orden_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'servicio_id', referencedColumnName: 'id' },
  })
  servicios: Relation<Servicio[]>;
}
