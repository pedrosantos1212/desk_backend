import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { DemandaStatusMovimento } from '../demanda-status-movimento/entities/demanda-status-movimento.entity.js';
import { CreateDemandaDto } from './dto/create-demanda.dto.js';
import { UpdateDemandaDto } from './dto/update-demanda.dto.js';
import { Demanda } from './entities/demanda.entity.js';

@Injectable()
export class DemandaService {
  constructor(
    @InjectRepository(Demanda)
    private readonly demandaRepository: Repository<Demanda>,
    private readonly dataSource: DataSource,
  ) {}

  create(createDemandaDto: CreateDemandaDto): Promise<{
    demanda: Demanda;
    movimentoInicial: DemandaStatusMovimento;
  }> {
    const {
      demandaStatusId,
      alteradoPorId,
      justificativa,
      ...dadosDemanda
    } = createDemandaDto;

    // transaction confirma as duas gravacoes juntas ou desfaz as duas
    return this.dataSource.transaction(async (manager) => {
      const demandaRepository = manager.getRepository(Demanda);
      const movimentoRepository = manager.getRepository(
        DemandaStatusMovimento,
      );

      const demanda = demandaRepository.create(dadosDemanda);
      const demandaSalva = await demandaRepository.save(demanda);

      const movimentoInicial = movimentoRepository.create({
        demandaId: demandaSalva.id,
        demandaStatusId,
        alteradoPorId,
        justificativa: justificativa ?? null,
      });

      const movimentoSalvo = await movimentoRepository.save(
        movimentoInicial,
      );

      return {
        demanda: demandaSalva,
        movimentoInicial: movimentoSalvo,
      };
    });
  }

  findAll(): Promise<Demanda[]> {
    return this.demandaRepository.find();
  }

  async findOne(id: number): Promise<Demanda> {
    const demanda = await this.demandaRepository.findOneBy({ id });

    if (!demanda) {
      throw new NotFoundException(`Demanda com id ${id} nao foi encontrada`);
    }

    return demanda;
  }

  async update(
    id: number,
    updateDemandaDto: UpdateDemandaDto,
  ): Promise<Demanda> {
    const demanda = await this.findOne(id);

    if (updateDemandaDto.titulo !== undefined) {
      demanda.titulo = updateDemandaDto.titulo;
    }

    if (updateDemandaDto.descricao !== undefined) {
      demanda.descricao = updateDemandaDto.descricao;
    }

    if (updateDemandaDto.demandaPrioridadeId !== undefined) {
      demanda.demandaPrioridadeId = updateDemandaDto.demandaPrioridadeId;
    }

    if (updateDemandaDto.setorResponsavelId !== undefined) {
      demanda.setorResponsavelId = updateDemandaDto.setorResponsavelId;
    }

    return this.demandaRepository.save(demanda);
  }
}
