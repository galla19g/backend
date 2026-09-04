import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Modelos } from './modelo.entity.js'; 

@Entity('marcas')
export class Marca {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    Nombre_Marca: String;

    @OneToMany(() => Modelos, (modelos) => modelos.marca)
    modelos: Modelos[];
}
