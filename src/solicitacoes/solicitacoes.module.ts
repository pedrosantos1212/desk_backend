import { Module } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service.js';
import { SolicitacoesController } from './solicitacoes.controller.js';

@Module({
  controllers: [SolicitacoesController],
  providers: [SolicitacoesService],
})
export class SolicitacoesModule {}
