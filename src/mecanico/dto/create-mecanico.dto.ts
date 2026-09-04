import { IsNotEmpty, IsString } from "class-validator";

export class CreateMecanicoDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    apellido:string;

    @IsString()
    @IsNotEmpty()
    especialidad:string
}