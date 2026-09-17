import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSolicitacaoStatusDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome: string;
}
