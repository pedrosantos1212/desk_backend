import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandaStatusMovimento } from './entities/demanda-status-movimento.entity.js';
import { DemandaStatusMovimentoService } from './demanda-status-movimento.service.js';
import { DemandaStatusMovimentoController } from './demanda-status-movimento.controller.js';

@Module({
  // disponibiliza o repository da entidade dentro deste modulo
  imports: [TypeOrmModule.forFeature([DemandaStatusMovimento])],
  controllers: [DemandaStatusMovimentoController],
  providers: [DemandaStatusMovimentoService],
})
export class DemandaStatusMovimentoModule {}
