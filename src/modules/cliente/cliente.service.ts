import { CreateContaDto } from './dto/create-conta.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

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
        conta: true,
      },
    });
  }
  async getCliente(id: number) {
    return await this.prisma.cliente.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        nome: true,
        data_nascimento: true,
        endereco: true,
        email: true,
        senha: false,
        conta: true,
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
  async updateCliente(updateClienteDto: UpdateClienteDto, id: number) {
    return await this.prisma.cliente.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: updateClienteDto.nome,
        data_nascimento: updateClienteDto.data_nascimento,
        endereco: updateClienteDto.endereco,
        email: updateClienteDto.email,
        senha: updateClienteDto.senha,
      },
    });
  }
}
