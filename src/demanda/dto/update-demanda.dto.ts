import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandaDto } from './create-demanda.dto.js';

export class UpdateDemandaDto extends PartialType(CreateDemandaDto) {}
