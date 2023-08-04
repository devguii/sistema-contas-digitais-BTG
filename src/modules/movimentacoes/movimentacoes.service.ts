import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovimentacoesService {
  constructor(private readonly prisma: PrismaService) {}
  async consultaExtrato(numero_conta: number) {
    const extrato = await this.prisma.movimentacao.findMany({
      where: {
        numero_conta: Number(numero_conta),
      },
    });
    return extrato;
  }
}
