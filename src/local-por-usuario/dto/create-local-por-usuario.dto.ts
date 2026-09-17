import { IsInt, IsPositive } from 'class-validator';

export class CreateLocalPorUsuarioDto {
  @IsInt()
  @IsPositive()
  localId: number;

  @IsInt()
  @IsPositive()
  usuarioId: number;
}
