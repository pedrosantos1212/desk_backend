import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from '../usuario/entities/usuario.entity.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async login(email: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        status: true,
        pessoa: {
          email,
          status: true,
        },
      },
      relations: {
        pessoa: true,
        cargo: true,
        senioridade: true,
        setor: true,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException(
        'Email invalido ou usuario inativo',
      );
    }

    return usuario;
  }
}