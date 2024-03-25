import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: 'hashsecret', // Deve ser o mesmo segredo usado na assinatura do token
    });
  }

  async validate(payload: any) {
    // Aqui, você pode buscar o usuário no banco de dados, caso necessário
    // Para este exemplo, apenas retornaremos o payload do JWT
    return { userId: payload.sub, username: payload.username };
  }
}
