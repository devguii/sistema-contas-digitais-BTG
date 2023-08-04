import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesController } from './movimentacoes.controller';

@Module({
  controllers: [MovimentacoesController],
  providers: [PrismaService, MovimentacoesService],
})
export class MovimentacoesModule {}
