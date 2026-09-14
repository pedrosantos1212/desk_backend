import { Module } from '@nestjs/common';
import { Local } from './local.entity.js';
import { LocalController } from './local.controller.js';
import { LocalService } from './local.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // forFeature disponibiliza dentro do modulo os recursos de banco
  // relacionados a entidade Local
  imports:[TypeOrmModule.forFeature([Local])],
  controllers: [LocalController],
  providers: [LocalService]
})
export class LocalModule {}
