import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

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

   // @OneToMany(() => OrdenesServicio, (orden) => orden)
   // ordenesServicio: OrdenesServicio[];
}
