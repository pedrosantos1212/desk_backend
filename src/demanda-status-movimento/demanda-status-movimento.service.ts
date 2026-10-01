import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDemandaStatusMovimentoDto } from './dto/create-demanda-status-movimento.dto.js';
import { DemandaStatusMovimento } from './entities/demanda-status-movimento.entity.js';

@Injectable()
export class DemandaStatusMovimentoService {
  constructor(
    @InjectRepository(DemandaStatusMovimento)
    private readonly movimentoRepository: Repository<DemandaStatusMovimento>,
  ) {}

  create(
    createMovimentoDto: CreateDemandaStatusMovimentoDto,
  ): Promise<DemandaStatusMovimento> {
    // create monta o movimento na memoria usando os dados recebidos
    const movimento = this.movimentoRepository.create(createMovimentoDto);

    return this.movimentoRepository.save(movimento);
  }

  findAll(): Promise<DemandaStatusMovimento[]> {
    return this.movimentoRepository.find({
      order: { ocorridoEm: 'ASC' },
    });
  }

  async findOne(id: number): Promise<DemandaStatusMovimento> {
    const movimento = await this.movimentoRepository.findOneBy({ id });

    if (!movimento) {
      throw new NotFoundException(
        `Movimento de status com id ${id} nao foi encontrado`,
      );
    }

    return movimento;
  }

  findByDemanda(demandaId: number): Promise<DemandaStatusMovimento[]> {
    return this.movimentoRepository.find({
      where: { demandaId },
      order: { ocorridoEm: 'ASC' },
    });
  }
}
