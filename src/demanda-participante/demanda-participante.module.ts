import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandaParticipante } from './entities/demanda-participante.entity.js';
import { DemandaParticipanteService } from './demanda-participante.service.js';
import { DemandaParticipanteController } from './demanda-participante.controller.js';

@Module({
  // disponibiliza o repository da entidade dentro deste modulo
  imports: [TypeOrmModule.forFeature([DemandaParticipante])],
  controllers: [DemandaParticipanteController],
  providers: [DemandaParticipanteService],
})
export class DemandaParticipanteModule {}
