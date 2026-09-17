import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDemandaStatusDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome: string;
}
