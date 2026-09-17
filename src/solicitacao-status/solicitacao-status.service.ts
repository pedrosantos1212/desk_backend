import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SolicitacaoStatus } from './solicitacao-status.entity.js';
import { CreateSolicitacaoStatusDto } from './dto/create-solicitacao-status.dto.js';
import { UpdateSolicitacaoStatusDto } from './dto/update-solicitacao-status.dto.js';

@Injectable()
export class SolicitacaoStatusService {
  constructor(
    @InjectRepository(SolicitacaoStatus) // Repository da entidade
    private readonly solicitacaoStatusRepository: Repository<SolicitacaoStatus>,
  ) {}

  findAll(): Promise<SolicitacaoStatus[]> {
    return this.solicitacaoStatusRepository.find();
  }

  create(createDto: CreateSolicitacaoStatusDto): Promise<SolicitacaoStatus> {
    const entity = this.solicitacaoStatusRepository.create(createDto);

    return this.solicitacaoStatusRepository.save(entity);
  }

  async findOne(id: number): Promise<SolicitacaoStatus> {
    const entity = await this.solicitacaoStatusRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Status da solicitação com id ' + id + ' não encontrado');
    }

    return entity;
  }

  async update(id: number, updateDto: UpdateSolicitacaoStatusDto): Promise<SolicitacaoStatus> {
    const entity = await this.findOne(id);

    if (updateDto.nome !== undefined) {
      entity.nome = updateDto.nome;
    }

    if (updateDto.status !== undefined) {
      entity.status = updateDto.status;
    }

    return this.solicitacaoStatusRepository.save(entity);
  }

  async deactivate(id: number): Promise<SolicitacaoStatus> {
    const entity = await this.findOne(id);

    entity.status = false; // Desativação lógica

    return this.solicitacaoStatusRepository.save(entity);
  }
}
