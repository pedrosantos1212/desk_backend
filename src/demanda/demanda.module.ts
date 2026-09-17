import { Module } from '@nestjs/common';
import { DemandaService } from './demanda.service.js';
import { DemandaController } from './demanda.controller.js';

@Module({
  controllers: [DemandaController],
  providers: [DemandaService],
})
export class DemandaModule {}
