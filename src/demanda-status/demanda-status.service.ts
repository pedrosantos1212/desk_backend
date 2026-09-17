import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemandaStatus } from './demanda-status.entity.js';
import { CreateDemandaStatusDto } from './dto/create-demanda-status.dto.js';
import { UpdateDemandaStatusDto } from './dto/update-demanda-status.dto.js';

@Injectable()
export class DemandaStatusService {
  constructor(
    @InjectRepository(DemandaStatus) // Repository da entidade
    private readonly demandaStatusRepository: Repository<DemandaStatus>,
  ) {}

  findAll(): Promise<DemandaStatus[]> {
    return this.demandaStatusRepository.find();
  }

  create(createDto: CreateDemandaStatusDto): Promise<DemandaStatus> {
    const entity = this.demandaStatusRepository.create(createDto);

    return this.demandaStatusRepository.save(entity);
  }

  async findOne(id: number): Promise<DemandaStatus> {
    const entity = await this.demandaStatusRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Status da demanda com id ' + id + ' não encontrado');
    }

    return entity;
  }

  async update(id: number, updateDto: UpdateDemandaStatusDto): Promise<DemandaStatus> {
    const entity = await this.findOne(id);

    if (updateDto.nome !== undefined) {
      entity.nome = updateDto.nome;
    }

    if (updateDto.status !== undefined) {
      entity.status = updateDto.status;
    }

    return this.demandaStatusRepository.save(entity);
  }

  async deactivate(id: number): Promise<DemandaStatus> {
    const entity = await this.findOne(id);

    entity.status = false; // Desativação lógica

    return this.demandaStatusRepository.save(entity);
  }
}
