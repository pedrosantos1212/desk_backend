import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandaStatusMovimento } from '../demanda-status-movimento/entities/demanda-status-movimento.entity.js';
import { Demanda } from './entities/demanda.entity.js';
import { DemandaService } from './demanda.service.js';
import { DemandaController } from './demanda.controller.js';

@Module({
  // disponibiliza o repository da entidade dentro deste modulo
  imports: [TypeOrmModule.forFeature([Demanda, DemandaStatusMovimento])],
  controllers: [DemandaController],
  providers: [DemandaService],
})
export class DemandaModule {}
