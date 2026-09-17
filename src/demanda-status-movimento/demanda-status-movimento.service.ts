import { Injectable } from '@nestjs/common';
import { CreateDemandaStatusMovimentoDto } from './dto/create-demanda-status-movimento.dto.js';
import { UpdateDemandaStatusMovimentoDto } from './dto/update-demanda-status-movimento.dto.js';

@Injectable()
export class DemandaStatusMovimentoService {
  create(createDemandaStatusMovimentoDto: CreateDemandaStatusMovimentoDto) {
    return 'This action adds a new demandaStatusMovimento';
  }

  findAll() {
    return `This action returns all demandaStatusMovimento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandaStatusMovimento`;
  }

  update(id: number, updateDemandaStatusMovimentoDto: UpdateDemandaStatusMovimentoDto) {
    return `This action updates a #${id} demandaStatusMovimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandaStatusMovimento`;
  }
}
