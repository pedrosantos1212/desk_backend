import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateDemandaParticipanteDto {
  @IsInt()
  @IsPositive()
  usuarioId: number;

  @IsInt()
  @IsPositive()
  demandaId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  papel: string;

  @IsInt()
  @IsPositive()
  adicionadoPorId: number;
}
