import { PartialType } from '@nestjs/mapped-types';
import { CreateMecanicoDto } from './create-mecanico.dto.js';

export class UpdateMecanicoDto extends PartialType(CreateMecanicoDto) {}
