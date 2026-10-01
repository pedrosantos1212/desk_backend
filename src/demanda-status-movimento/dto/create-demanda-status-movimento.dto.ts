import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateDemandaStatusMovimentoDto {
  @IsInt()
  @IsPositive()
  demandaId: number;

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
