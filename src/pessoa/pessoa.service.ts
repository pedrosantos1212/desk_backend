import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity.js';
import { CreatePessoaDto } from './dto/create-pessoa.dto.js';
import { UpdatePessoaDto } from './dto/update-pessoa.dto.js';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa) // Repository da entidade
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    const pessoa = this.pessoaRepository.create(createPessoaDto);

    return this.pessoaRepository.save(pessoa);
  }

  async findOne(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOneBy({ id });

    if (!pessoa) {
      throw new NotFoundException('Pessoa com id ' + id + ' não encontrada');
    }

    return pessoa;
  }

  async update(
    id: number,
    updatePessoaDto: UpdatePessoaDto,
  ): Promise<Pessoa> {
    const pessoa = await this.findOne(id);

    if (updatePessoaDto.nome !== undefined) {
      pessoa.nome = updatePessoaDto.nome;
    }

    if (updatePessoaDto.status !== undefined) {
      pessoa.status = updatePessoaDto.status;
    }

    if (updatePessoaDto.email !== undefined) {
      pessoa.email = updatePessoaDto.email;
    }

    if (updatePessoaDto.telefone !== undefined) {
      pessoa.telefone = updatePessoaDto.telefone;
    }

    return this.pessoaRepository.save(pessoa);
  }

  async deactivate(id: number): Promise<Pessoa> {
    const pessoa = await this.findOne(id);

    pessoa.status = false; // Desativação lógica

    return this.pessoaRepository.save(pessoa);
  }
}
