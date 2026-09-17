import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandaParticipanteService } from './demanda-participante.service.js';
import { CreateDemandaParticipanteDto } from './dto/create-demanda-participante.dto.js';
import { UpdateDemandaParticipanteDto } from './dto/update-demanda-participante.dto.js';

@Controller('demanda-participante')
export class DemandaParticipanteController {
  constructor(private readonly demandaParticipanteService: DemandaParticipanteService) {}

  @Post()
  create(@Body() createDemandaParticipanteDto: CreateDemandaParticipanteDto) {
    return this.demandaParticipanteService.create(createDemandaParticipanteDto);
  }

  @Get()
  findAll() {
    return this.demandaParticipanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandaParticipanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandaParticipanteDto: UpdateDemandaParticipanteDto) {
    return this.demandaParticipanteService.update(+id, updateDemandaParticipanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandaParticipanteService.remove(+id);
  }
}
