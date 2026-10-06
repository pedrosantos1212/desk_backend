import { IsInt, IsPositive } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt()
  @IsPositive() // valor nao sera 0 nem negativo
  pessoaId: number;

  @IsInt()
  @IsPositive()
  cargoId: number;

  @IsInt()
  @IsPositive()
  senioridadeId: number;

  @IsInt()
  @IsPositive()
  setorId: number;
}
