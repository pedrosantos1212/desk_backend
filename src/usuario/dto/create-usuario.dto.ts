import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreateUsuarioDto {
 @IsInt()
 @IsPositive() // valor não sera 0 nem negativo
  cargoId: number;

  @IsInt()
 @IsPositive()
  senioridadeId: number;

   @IsInt()
 @IsPositive()
  pessoaId: number;

   @IsInt()
 @IsPositive()
  setorId: number;

  @IsString()
  @MinLength(8)
  senha: string;
}