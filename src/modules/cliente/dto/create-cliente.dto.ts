import { IsString, IsEmail, IsDate } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nome: string;
  @IsDate()
  data_nascimento: Date;
  @IsString()
  endereco: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
}
