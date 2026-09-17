import { Module } from '@nestjs/common';
import { DemandaParticipanteService } from './demanda-participante.service.js';
import { DemandaParticipanteController } from './demanda-participante.controller.js';

@Module({
  controllers: [DemandaParticipanteController],
  providers: [DemandaParticipanteService],
})
export class DemandaParticipanteModule {}
