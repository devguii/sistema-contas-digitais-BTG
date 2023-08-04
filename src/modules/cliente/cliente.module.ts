import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  imports: [],
  providers: [PrismaService, ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
