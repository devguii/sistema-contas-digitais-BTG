import { IsString, IsEmail } from 'class-validator';

export class UpdateClienteDto {
  @IsString()
  nome: string;
  @IsString()
  data_nascimento: string;
  @IsString()
  endereco: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
}
