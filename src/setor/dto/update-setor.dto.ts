import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class UpdateSetorDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  nome?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
