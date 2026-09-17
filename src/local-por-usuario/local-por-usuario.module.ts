import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalPorUsuario } from './entities/local-por-usuario.entity.js';
import { LocalPorUsuarioService } from './local-por-usuario.service.js';
import { LocalPorUsuarioController } from './local-por-usuario.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([LocalPorUsuario])],
  controllers: [LocalPorUsuarioController],
  providers: [LocalPorUsuarioService],
})
export class LocalPorUsuarioModule {}
