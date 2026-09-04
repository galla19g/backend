import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Marca } from './marca.entity.js'
@Entity('modelos')
export class Modelos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_modelo: string;

    @ManyToOne(() => Marca, (Marca) => Marca.modelos)
    marca: Marca;
}