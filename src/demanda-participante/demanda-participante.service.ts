import { Injectable } from '@nestjs/common';
import { CreateDemandaParticipanteDto } from './dto/create-demanda-participante.dto.js';
import { UpdateDemandaParticipanteDto } from './dto/update-demanda-participante.dto.js';

@Injectable()
export class DemandaParticipanteService {
  create(createDemandaParticipanteDto: CreateDemandaParticipanteDto) {
    return 'This action adds a new demandaParticipante';
  }

  findAll() {
    return `This action returns all demandaParticipante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} demandaParticipante`;
  }

  update(id: number, updateDemandaParticipanteDto: UpdateDemandaParticipanteDto) {
    return `This action updates a #${id} demandaParticipante`;
  }

  remove(id: number) {
    return `This action removes a #${id} demandaParticipante`;
  }
}
