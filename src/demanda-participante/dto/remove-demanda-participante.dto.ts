import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class RemoveDemandaParticipanteDto {
  @IsInt()
  @IsPositive()
  removidoPorId: number;

  @IsOptional()
  @IsString()
  motivoSaida?: string;
}
