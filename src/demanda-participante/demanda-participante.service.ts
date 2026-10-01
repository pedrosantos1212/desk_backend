import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CreateDemandaParticipanteDto } from './dto/create-demanda-participante.dto.js';
import { RemoveDemandaParticipanteDto } from './dto/remove-demanda-participante.dto.js';
import { DemandaParticipante } from './entities/demanda-participante.entity.js';

@Injectable()
export class DemandaParticipanteService {
  constructor(
    @InjectRepository(DemandaParticipante)
    private readonly participanteRepository: Repository<DemandaParticipante>,
  ) {}

  async create(
    createParticipanteDto: CreateDemandaParticipanteDto,
  ): Promise<DemandaParticipante> {
    const participanteAtivo = await this.participanteRepository.findOneBy({
      demandaId: createParticipanteDto.demandaId,
      usuarioId: createParticipanteDto.usuarioId,
      saiuEm: IsNull(), // busca somente registros que ainda nao possuem saida
    });

    if (participanteAtivo) {
      throw new ConflictException(
        'Usuario ja participa desta demanda',
      );
    }

    const participante = this.participanteRepository.create(
      createParticipanteDto,
    );

    return this.participanteRepository.save(participante);
  }

  findAll(): Promise<DemandaParticipante[]> {
    return this.participanteRepository.find({
      order: { entrouEm: 'ASC' },
    });
  }

  async findOne(id: number): Promise<DemandaParticipante> {
    const participante = await this.participanteRepository.findOneBy({ id });

    if (!participante) {
      throw new NotFoundException(
        `Participante com id ${id} nao foi encontrado`,
      );
    }

    return participante;
  }

  findByDemanda(demandaId: number): Promise<DemandaParticipante[]> {
    return this.participanteRepository.find({
      where: { demandaId },
      order: { entrouEm: 'ASC' },
    });
  }

  async remove(
    id: number,
    removeParticipanteDto: RemoveDemandaParticipanteDto,
  ): Promise<DemandaParticipante> {
    const participante = await this.findOne(id);

    if (participante.saiuEm !== null) {
      throw new BadRequestException(
        'Participante ja foi removido desta demanda',
      );
    }

    participante.saiuEm = new Date();
    participante.removidoPorId = removeParticipanteDto.removidoPorId;
    participante.motivoSaida = removeParticipanteDto.motivoSaida ?? null;

    return this.participanteRepository.save(participante);
  }
}
