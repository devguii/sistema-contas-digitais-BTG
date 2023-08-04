import { Injectable, Patch, BadRequestException } from '@nestjs/common';
import { RealizarMovimentacaoDto } from './dto/realizar-movimentacao.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContaService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    return `This action returns all conta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conta`;
  }

  async movimentacao(
    numeroConta: number,
    realizarMovimentacaoDto: RealizarMovimentacaoDto,
  ) {
    const conta = await this.prisma.conta.findUnique({
      where: {
        numero_conta: numeroConta,
      },
    });

    if (!conta) {
      throw new BadRequestException('Conta inexistente.');
    }

    const { tipo, valor } = realizarMovimentacaoDto;

    const tiposValidos = ['deposito', 'saque'];

    if (!tiposValidos.includes(tipo)) {
      throw new BadRequestException('Tipo de movimentação inválida');
    }

    switch (tipo) {
      case 'deposito':
        await this.prisma.conta.update({
          where: {
            numero_conta: conta.numero_conta,
          },
          data: {
            saldo: conta.saldo + Number(valor),
          },
        });
        break;

      case 'saque':
        if (Number(valor) > conta.saldo) {
          throw new BadRequestException(
            'Saldo insuficiente para completar a movimentação!',
          );
        }
        await this.prisma.conta.update({
          where: {
            numero_conta: conta.numero_conta,
          },
          data: {
            saldo: conta.saldo - Number(valor),
          },
        });
        break;

      default:
        throw new BadRequestException('Tipo de movimentação inválida');
    }

    await this.prisma.movimentacao.create({
      data: {
        tipo,
        valor: Number(valor),
        conta: {
          connect: {
            numero_conta: conta.numero_conta,
          },
        },
      },
    });
  }
}
