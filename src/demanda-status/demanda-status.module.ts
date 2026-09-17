import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandaStatus } from './demanda-status.entity.js';
import { DemandaStatusController } from './demanda-status.controller.js';
import { DemandaStatusService } from './demanda-status.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([DemandaStatus])], // Libera o Repository
  controllers: [DemandaStatusController],
  providers: [DemandaStatusService],
})
export class DemandaStatusModule {}
