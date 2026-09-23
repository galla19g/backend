import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehiculoDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsNotEmpty()
    @IsString()
    marca: string;

    @IsNotEmpty()
    @IsString()
    modelo: string;

    @IsNotEmpty()
    @IsString()
    placa: string; 
}
