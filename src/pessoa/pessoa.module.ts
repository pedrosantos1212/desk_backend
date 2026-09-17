import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.entity.js';
import { PessoaController } from './pessoa.controller.js';
import { PessoaService } from './pessoa.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])], // Libera o Repository
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class PessoaModule {}
