import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guardies/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    // Lista fictícia de usuários
    return [
      { id: 1, name: 'Usuário 1' },
      { id: 2, name: 'Usuário 2' },
      // Adicione mais usuários conforme necessário
    ];
  }
}
