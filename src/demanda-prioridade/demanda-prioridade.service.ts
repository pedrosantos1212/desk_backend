import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DemandaPrioridade } from './demanda-prioridade.entity.js';
import { CreateDemandaPrioridadeDto } from './dto/create-demanda-prioridade.dto.js';
import { UpdateDemandaPrioridadeDto } from './dto/update-demanda-prioridade.dto.js';

@Injectable()
export class DemandaPrioridadeService {
  constructor(
    @InjectRepository(DemandaPrioridade) // Repository da entidade
    private readonly demandaPrioridadeRepository: Repository<DemandaPrioridade>,
  ) {}

  findAll(): Promise<DemandaPrioridade[]> {
    return this.demandaPrioridadeRepository.find();
  }

  create(createDto: CreateDemandaPrioridadeDto): Promise<DemandaPrioridade> {
    const entity = this.demandaPrioridadeRepository.create(createDto);

    return this.demandaPrioridadeRepository.save(entity);
  }

  async findOne(id: number): Promise<DemandaPrioridade> {
    const entity = await this.demandaPrioridadeRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Prioridade da demanda com id ' + id + ' não encontrado');
    }

    return entity;
  }

  async update(id: number, updateDto: UpdateDemandaPrioridadeDto): Promise<DemandaPrioridade> {
    const entity = await this.findOne(id);

    if (updateDto.nome !== undefined) {
      entity.nome = updateDto.nome;
    }

    if (updateDto.status !== undefined) {
      entity.status = updateDto.status;
    }

    return this.demandaPrioridadeRepository.save(entity);
  }

  async deactivate(id: number): Promise<DemandaPrioridade> {
    const entity = await this.findOne(id);

    entity.status = false; // Desativação lógica

    return this.demandaPrioridadeRepository.save(entity);
  }
}
