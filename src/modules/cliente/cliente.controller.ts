import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get('clientes')
  async getClientes() {
    return this.clienteService.getClientes();
  }
  @Get(':id')
  async getCliente(@Param('id') id: number) {
    return this.clienteService.getCliente(Number(id));
  }
  @Post('create')
  async createCliente(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.createCliente(createClienteDto);
  }
  @Put('update/:id')
  async updateCliente(
    @Body() updateClienteDto: UpdateClienteDto,
    @Param('id') id: number,
  ) {
    return this.clienteService.updateCliente(updateClienteDto, id);
  }
}
