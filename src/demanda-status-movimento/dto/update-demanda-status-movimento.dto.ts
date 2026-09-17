import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandaStatusMovimentoDto } from './create-demanda-status-movimento.dto.js';

export class UpdateDemandaStatusMovimentoDto extends PartialType(CreateDemandaStatusMovimentoDto) {}
