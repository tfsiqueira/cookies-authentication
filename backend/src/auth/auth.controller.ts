import { Controller, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Res() res: Response) {
    const user = await this.authService.validateUser(req.body.username, req.body.password);
    if (!user) {
      return res.status(401).send({ message: 'Usuário ou senha inválidos' });
    }
    const token = await this.authService.login(user);
    res.cookie('Authentication', token.access_token, { httpOnly: true, sameSite: 'strict' });
    return res.send({ message: 'Login realizado com sucesso' });
  }
}
