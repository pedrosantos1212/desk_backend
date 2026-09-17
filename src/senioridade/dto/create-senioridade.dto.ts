import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSenioridadeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome: string;
}
