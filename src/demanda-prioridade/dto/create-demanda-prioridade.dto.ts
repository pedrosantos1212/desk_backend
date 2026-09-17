import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDemandaPrioridadeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome: string;
}
