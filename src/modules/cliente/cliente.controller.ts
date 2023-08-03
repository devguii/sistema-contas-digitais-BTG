import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { CreateContaDto } from './dto/create-conta.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('clientes')
  async getClientes() {
    return this.clienteService.getClientes();
  }
  @Post('create')
  async createCliente(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.createCliente(createClienteDto);
  }
}
