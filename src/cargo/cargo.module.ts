import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cargo } from './cargo.entity.js';
import { CargoController } from './cargo.controller.js';
import { CargoService } from './cargo.service.js';

@Module({
  imports: [TypeOrmModule.forFeature([Cargo])], // Libera o Repository
  controllers: [CargoController],
  providers: [CargoService],
})
export class CargoModule {}
