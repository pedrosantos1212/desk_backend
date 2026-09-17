import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSetorDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome: string;
}
