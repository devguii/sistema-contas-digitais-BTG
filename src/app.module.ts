import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ContaModule } from './modules/conta/conta.module';
import { MovimentacoesModule } from './modules/movimentacoes/movimentacoes.module';

@Module({
  imports: [PrismaModule, ClienteModule, ContaModule, MovimentacoesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
