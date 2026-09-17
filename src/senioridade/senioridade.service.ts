import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Senioridade } from './senioridade.entity.js';
import { CreateSenioridadeDto } from './dto/create-senioridade.dto.js';
import { UpdateSenioridadeDto } from './dto/update-senioridade.dto.js';

@Injectable()
export class SenioridadeService {
  constructor(
    @InjectRepository(Senioridade) // Repository da entidade
    private readonly senioridadeRepository: Repository<Senioridade>,
  ) {}

  findAll(): Promise<Senioridade[]> {
    return this.senioridadeRepository.find();
  }

  create(createDto: CreateSenioridadeDto): Promise<Senioridade> {
    const entity = this.senioridadeRepository.create(createDto);

    return this.senioridadeRepository.save(entity);
  }

  async findOne(id: number): Promise<Senioridade> {
    const entity = await this.senioridadeRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Senioridade com id ' + id + ' não encontrado');
    }

    return entity;
  }

  async update(id: number, updateDto: UpdateSenioridadeDto): Promise<Senioridade> {
    const entity = await this.findOne(id);

    if (updateDto.nome !== undefined) {
      entity.nome = updateDto.nome;
    }

    if (updateDto.status !== undefined) {
      entity.status = updateDto.status;
    }

    return this.senioridadeRepository.save(entity);
  }

  async deactivate(id: number): Promise<Senioridade> {
    const entity = await this.findOne(id);

    entity.status = false; // Desativação lógica

    return this.senioridadeRepository.save(entity);
  }
}
