import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DemandaParticipanteService } from './demanda-participante.service.js';
import { CreateDemandaParticipanteDto } from './dto/create-demanda-participante.dto.js';
import { RemoveDemandaParticipanteDto } from './dto/remove-demanda-participante.dto.js';

@Controller('demanda-participante')
export class DemandaParticipanteController {
  constructor(
    private readonly participanteService: DemandaParticipanteService,
  ) {}

  @Post()
  create(@Body() createParticipanteDto: CreateDemandaParticipanteDto) {
    return this.participanteService.create(createParticipanteDto);
  }

  @Get()
  findAll() {
    return this.participanteService.findAll();
  }

  @Get('demanda/:demandaId')
  findByDemanda(
    @Param('demandaId', ParseIntPipe) demandaId: number,
  ) {
    return this.participanteService.findByDemanda(demandaId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.participanteService.findOne(id);
  }

  @Patch(':id/remover')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() removeParticipanteDto: RemoveDemandaParticipanteDto,
  ) {
    return this.participanteService.remove(id, removeParticipanteDto);
  }
}
