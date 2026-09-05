import {IsString, IsNotEmpty} from 'class-validator';

export class CreateMarcaDto {
    @IsString()
    @IsNotEmpty()
    Nombre_Marca: string

}

