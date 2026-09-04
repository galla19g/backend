import { PartialType } from '@nestjs/mapped-types';
import { CreateMarcasModeloDto } from './create-marcas-modelo.dto.js';

export class UpdateMarcasModeloDto extends PartialType(CreateMarcasModeloDto) {}
