import { PartialType } from '@nestjs/mapped-types';
import { CreateDemandaParticipanteDto } from './create-demanda-participante.dto.js';

export class UpdateDemandaParticipanteDto extends PartialType(CreateDemandaParticipanteDto) {}
