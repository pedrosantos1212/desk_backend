import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto.js';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto.js';

@Injectable()
export class SolicitacoesService {
  create(createSolicitacaoDto: CreateSolicitacaoDto) {
    return 'This action adds a new solicitacoe';
  }

  findAll() {
    return `This action returns all solicitacoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacoe`;
  }

  update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return `This action updates a #${id} solicitacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacoe`;
  }
}
