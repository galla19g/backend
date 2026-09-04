import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenesServicioDto } from './create-ordenes-servicio.dto.js';

export class UpdateOrdenesServicioDto extends PartialType(CreateOrdenesServicioDto) {}
