import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitacao } from './entities/solicitacoes.entity.js';
import { SolicitacoesService } from './solicitacoes.service.js';
import { SolicitacoesController } from './solicitacoes.controller.js';

@Module({
  // disponibiliza o repository da entidade dentro deste modulo
  imports: [TypeOrmModule.forFeature([Solicitacao])],
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService],
})
export class SolicitacoesModule {}
