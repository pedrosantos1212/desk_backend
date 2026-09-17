import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandaPrioridade } from './demanda-prioridade.entity.js';
import { DemandaPrioridadeController } from './demanda-prioridade.controller.js';
import { DemandaPrioridadeService } from './demanda-prioridade.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([DemandaPrioridade])], // Libera o Repository
  controllers: [DemandaPrioridadeController],
  providers: [DemandaPrioridadeService],
})
export class DemandaPrioridadeModule {}
