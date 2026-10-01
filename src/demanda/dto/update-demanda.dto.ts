import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateDemandaDto } from './create-demanda.dto.js';

export class UpdateDemandaDto extends PartialType(
  PickType(
    CreateDemandaDto,
    ['titulo', 'descricao', 'demandaPrioridadeId', 'setorResponsavelId'] as const,
  ),
) {}
