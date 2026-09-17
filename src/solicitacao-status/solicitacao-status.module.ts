import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SolicitacaoStatus } from './solicitacao-status.entity.js';
import { SolicitacaoStatusController } from './solicitacao-status.controller.js';
import { SolicitacaoStatusService } from './solicitacao-status.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([SolicitacaoStatus])], // Libera o Repository
  controllers: [SolicitacaoStatusController],
  providers: [SolicitacaoStatusService],
})
export class SolicitacaoStatusModule {}
