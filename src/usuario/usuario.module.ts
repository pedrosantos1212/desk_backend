import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';
import { UsuarioController } from './usuario.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Pessoa } from '../pessoa/pessoa.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Pessoa])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
