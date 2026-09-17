import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setor } from './setor.entity.js';
import { CreateSetorDto } from './dto/create-setor.dto.js';
import { UpdateSetorDto } from './dto/update-setor.dto.js';

@Injectable()
export class SetorService {
  constructor(
    @InjectRepository(Setor) // Repository da entidade
    private readonly setorRepository: Repository<Setor>,
  ) {}

  findAll(): Promise<Setor[]> {
    return this.setorRepository.find();
  }

  create(createSetorDto: CreateSetorDto): Promise<Setor> {
    const setor = this.setorRepository.create(createSetorDto);

    return this.setorRepository.save(setor);
  }

  async findOne(id: number): Promise<Setor> {
    const setor = await this.setorRepository.findOneBy({ id });

    if (!setor) {
      throw new NotFoundException('Setor com id ' + id + ' não encontrado');
    }

    return setor;
  }

  async update(id: number, updateSetorDto: UpdateSetorDto): Promise<Setor> {
    const setor = await this.findOne(id);

    if (updateSetorDto.nome !== undefined) {
      setor.nome = updateSetorDto.nome;
    }

    if (updateSetorDto.status !== undefined) {
      setor.status = updateSetorDto.status;
    }

    return this.setorRepository.save(setor);
  }

  async deactivate(id: number): Promise<Setor> {
    const setor = await this.findOne(id);

    setor.status = false; // Desativação lógica

    return this.setorRepository.save(setor);
  }
}
