import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('vehiculos')
export class Vehiculo {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nombre: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    placa: string;
    
}