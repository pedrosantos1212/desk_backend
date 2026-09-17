import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cargo } from './cargo.entity.js';
import { CreateCargoDto } from './dto/create-cargo.dto.js';
import { UpdateCargoDto } from './dto/update-cargo.dto.js';

@Injectable()
export class CargoService {
  constructor(
    @InjectRepository(Cargo) // Repository da entidade
    private readonly cargoRepository: Repository<Cargo>,
  ) {}

  findAll(): Promise<Cargo[]> {
    return this.cargoRepository.find();
  }

  create(createDto: CreateCargoDto): Promise<Cargo> {
    const entity = this.cargoRepository.create(createDto);

    return this.cargoRepository.save(entity);
  }

  async findOne(id: number): Promise<Cargo> {
    const entity = await this.cargoRepository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Cargo com id ' + id + ' não encontrado');
    }

    return entity;
  }

  async update(id: number, updateDto: UpdateCargoDto): Promise<Cargo> {
    const entity = await this.findOne(id);

    if (updateDto.nome !== undefined) {
      entity.nome = updateDto.nome;
    }

    if (updateDto.status !== undefined) {
      entity.status = updateDto.status;
    }

    return this.cargoRepository.save(entity);
  }

  async deactivate(id: number): Promise<Cargo> {
    const entity = await this.findOne(id);

    entity.status = false; // Desativação lógica

    return this.cargoRepository.save(entity);
  }
}
