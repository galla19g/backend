import { Entity, PrimaryGeneratedColumn, Column, OneToMany, type Relation } from 'typeorm';
import { Modelos } from './modelo.entity.js';

@Entity('marcas')
export class Marca {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    Nombre_Marca: string;

    @OneToMany(() => Modelos, (modelos) => modelos.marca)
    modelos: Relation<Modelos[]>;
}
