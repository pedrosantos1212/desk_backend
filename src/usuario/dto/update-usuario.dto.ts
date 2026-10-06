import { PartialType, PickType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto.js';

// permite editar os dados profissionais, mas nao troca a pessoa do usuario
export class UpdateUsuarioDto extends PartialType(
  PickType(CreateUsuarioDto, ['cargoId', 'senioridadeId', 'setorId'] as const),
) {
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
