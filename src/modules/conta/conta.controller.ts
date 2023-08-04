import { Controller, Body, Patch, Param } from '@nestjs/common';
import { ContaService } from './conta.service';
import { RealizarMovimentacaoDto } from './dto/realizar-movimentacao.dto';

@Controller('conta')
export class ContaController {
  constructor(private readonly contaService: ContaService) {}

  @Patch(':numero_conta')
  update(
    @Param('numero_conta') numeroConta: number,
    @Body() realizarMovimentacaoDto: RealizarMovimentacaoDto,
  ) {
    return this.contaService.movimentacao(
      Number(numeroConta),
      realizarMovimentacaoDto,
    );
  }
}
