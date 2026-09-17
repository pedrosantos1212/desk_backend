import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSolicitacaoDto {
  @IsString()
  @IsNotEmpty() // nao pode vazio
  @MaxLength(150)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsInt()
  @IsPositive()
  solicitanteId: number;

  @IsInt()
  @IsPositive()
  criadoPorId: number;

  @IsInt()
  @IsPositive()
  solicitacaoStatusId: number;
}
