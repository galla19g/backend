import { IsNotEmpty, IsString, IsNumber, IsArray, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { EstadoOrden } from '../entities/orden.entity.js';

export class CreateOrdenDto {
  @IsNumber()
  @IsNotEmpty()
  vehiculo_id: number;

  @IsNumber()
  @IsOptional()
  mecanico_id?: number;

  @IsString()
  @IsNotEmpty()
  motivoIngreso: string;

  @IsNumber()
  @IsNotEmpty()
  kilometraje: number;

  @IsDateString()
  @IsOptional()
  fechaEntrega?: Date;

  @IsString()
  @IsOptional()
  diagnostico?: string;

  @IsString()
  @IsOptional()
  observaciones?: string;

  @IsEnum(EstadoOrden)
  @IsOptional()
  estado?: EstadoOrden;

  @IsNumber()
  @IsOptional()
  total?: number;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  servicios?: number[];
}
