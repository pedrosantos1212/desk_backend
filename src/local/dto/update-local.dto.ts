import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateLocalDto {
  @IsOptional()  // é opcional
  @IsString() // é string
  @IsNotEmpty() // nao é vazio
  @MaxLength(45) // max 45 carac
  nome?: string;

  @IsOptional() 
  @IsBoolean() // é booleano 
  status?: boolean;
}