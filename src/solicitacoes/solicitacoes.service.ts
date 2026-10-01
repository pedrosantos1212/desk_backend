import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolicitacaoDto } from './dto/create-solicitacoes.dto.js';
import { UpdateSolicitacaoDto } from './dto/update-solicitacoes.dto.js';
import { Solicitacao } from './entities/solicitacoes.entity.js';

@Injectable()
export class SolicitacoesService {
  constructor(
    @InjectRepository(Solicitacao)
    private readonly solicitacaoRepository: Repository<Solicitacao>,
  ) {}

  create(createSolicitacaoDto: CreateSolicitacaoDto): Promise<Solicitacao> {
    // create monta o objeto na memoria usando os dados recebidos
    const solicitacao = this.solicitacaoRepository.create(createSolicitacaoDto);

    return this.solicitacaoRepository.save(solicitacao);
  }

  findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find();
  }

  async findOne(id: number): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoRepository.findOneBy({ id });

    if (!solicitacao) {
      throw new NotFoundException(
        `Solicitacao com id ${id} nao foi encontrada`,
      );
    }

    return solicitacao;
  }

  async update(
    id: number,
    updateSolicitacaoDto: UpdateSolicitacaoDto,
  ): Promise<Solicitacao> {
    const solicitacao = await this.findOne(id);

    if (updateSolicitacaoDto.titulo !== undefined) {
      solicitacao.titulo = updateSolicitacaoDto.titulo;
    }

    if (updateSolicitacaoDto.descricao !== undefined) {
      solicitacao.descricao = updateSolicitacaoDto.descricao;
    }

    if (updateSolicitacaoDto.solicitanteId !== undefined) {
      solicitacao.solicitanteId = updateSolicitacaoDto.solicitanteId;
    }

    if (updateSolicitacaoDto.solicitacaoStatusId !== undefined) {
      solicitacao.solicitacaoStatusId =
        updateSolicitacaoDto.solicitacaoStatusId;
    }

    return this.solicitacaoRepository.save(solicitacao);
  }
}
