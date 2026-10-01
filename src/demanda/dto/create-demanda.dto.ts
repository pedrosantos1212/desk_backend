import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDemandaDto {
  @IsInt()
  @IsPositive()
  solicitacaoId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsInt()
  @IsPositive()
  demandaPrioridadeId: number;

  @IsInt()
  @IsPositive()
  setorResponsavelId: number;

  @IsInt()
  @IsPositive()
  demandaStatusId: number;

  @IsInt()
  @IsPositive()
  alteradoPorId: number;

  @IsOptional()
  @IsString()
  justificativa?: string;
}
