import { CreateContaDto } from './dto/create-conta.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}
  async getClientes() {
    return await this.prisma.cliente.findMany({
      select: {
        id: true,
        nome: true,
        data_nascimento: true,
        endereco: true,
        email: true,
        senha: false,
      },
    });
  }
  async createCliente(createClienteDto: CreateClienteDto) {
    return await this.prisma.cliente
      .create({
        data: {
          nome: createClienteDto.nome,
          data_nascimento: createClienteDto.data_nascimento,
          endereco: createClienteDto.endereco,
          email: createClienteDto.email,
          senha: createClienteDto.senha,
        },
      })
      .then(async () => {
        const clienteData = await this.prisma.cliente.findUnique({
          where: {
            email: createClienteDto.email,
          },
        });

        await this.prisma.conta.create({
          data: {
            cliente: {
              connect: {
                id: clienteData.id,
              },
            },
            saldo: 0,
          },
        });
      });
  }
}
