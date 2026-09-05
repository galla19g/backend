import {IsString, IsNotEmpty} from 'class-validator';

export class CreateModeloDto{
    @IsString()
    @IsNotEmpty()
    nombre_modelo:string
}