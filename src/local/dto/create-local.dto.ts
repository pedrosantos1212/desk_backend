import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateLocalDto {
  @IsString()  // verificação durante a requisição e é String
  @IsNotEmpty() // não é vazio
  @MaxLength(45) // maximo de 45 caracteres
  nome: string; // tipagem durante o desenvolvimento
}