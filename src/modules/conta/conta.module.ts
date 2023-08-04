import { PrismaService } from 'src/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';

@Module({
  controllers: [ContaController],
  providers: [PrismaService, ContaService],
})
export class ContaModule {}
