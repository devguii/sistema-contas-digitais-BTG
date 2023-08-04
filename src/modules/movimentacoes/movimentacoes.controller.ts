import { Controller, Get, Param } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Get(':numero_conta')
  async consultaExtrato(@Param('numero_conta') numero_conta: number) {
    return this.movimentacoesService.consultaExtrato(numero_conta);
  }
}
