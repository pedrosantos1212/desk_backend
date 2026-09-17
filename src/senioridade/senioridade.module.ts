import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Senioridade } from './senioridade.entity.js';
import { SenioridadeController } from './senioridade.controller.js';
import { SenioridadeService } from './senioridade.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Senioridade])], // Libera o Repository
  controllers: [SenioridadeController],
  providers: [SenioridadeService],
})
export class SenioridadeModule {}
