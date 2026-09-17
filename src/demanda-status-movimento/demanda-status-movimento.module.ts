import { Module } from '@nestjs/common';
import { DemandaStatusMovimentoService } from './demanda-status-movimento.service.js';
import { DemandaStatusMovimentoController } from './demanda-status-movimento.controller.js';

@Module({
  controllers: [DemandaStatusMovimentoController],
  providers: [DemandaStatusMovimentoService],
})
export class DemandaStatusMovimentoModule {}
