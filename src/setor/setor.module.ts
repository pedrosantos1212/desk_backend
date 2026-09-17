import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setor } from './setor.entity.js';
import { SetorController } from './setor.controller.js';
import { SetorService } from './setor.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Setor])], // Libera o Repository
  controllers: [SetorController],
  providers: [SetorService],
})
export class SetorModule {}
