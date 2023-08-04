import { Cliente } from '@prisma/client';
import { IsInt, IsNumber } from 'class-validator';

export class CreateContaDto {
  @IsInt()
  numero_conta: number;
  cliente: Cliente;
  @IsInt()
  id_cliente: number;
  @IsNumber()
  saldo: number;
}
