import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrdenesServicio } from '../../ordenes-servicio/entities/ordenes-servicio.entity.js';

@Entity('mecanicos')
export class Mecanico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    especialidad:string;

    @OneToMany(() => OrdenesServicio, (orden) => orden)
    ordenesServicio: OrdenesServicio[]; 
}
