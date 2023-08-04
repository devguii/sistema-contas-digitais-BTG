import { IsString, IsInt, IsNumber, IsPositive } from 'class-validator';

export class RealizarMovimentacaoDto {
  @IsInt()
  numero_conta: number;
  @IsString()
  tipo: string;
  @IsNumber()
  @IsPositive()
  valor: number;
}
