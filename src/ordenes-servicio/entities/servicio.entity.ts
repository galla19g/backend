import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, type Relation} from 'typeorm'
import {Orden} from "./orden.entity.js"


@Entity('servicio')
export class Servicio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;    

    @Column()
    precio: number;

    @Column()
    estado: string;

    @Column()
    fecha_inicio: Date;

    @Column()
    fecha_fin: Date;

       @ManyToMany(() => Orden, (orden) => orden.servicios)
    ordenes: Relation<Orden[]>;
}
