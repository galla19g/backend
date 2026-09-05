import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, type Relation } from 'typeorm';
import { Marca } from './marca.entity.js'
@Entity('modelos')
export class Modelos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_modelo: string;

    @ManyToOne(() => Marca, (marca) => marca.modelos)
    @JoinColumn({ name: 'marca_id' })
    marca: Relation<Marca>;
}