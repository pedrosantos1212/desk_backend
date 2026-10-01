import { PartialType, PickType } from '@nestjs/mapped-types';
import { CreateSolicitacaoDto } from './create-solicitacoes.dto.js';

export class UpdateSolicitacaoDto extends PartialType(
  PickType(
    CreateSolicitacaoDto,
    ['titulo', 'descricao', 'solicitanteId', 'solicitacaoStatusId'] as const,
  ),
) {}
