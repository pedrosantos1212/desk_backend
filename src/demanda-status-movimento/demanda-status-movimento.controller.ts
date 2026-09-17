import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemandaStatusMovimentoService } from './demanda-status-movimento.service.js';
import { CreateDemandaStatusMovimentoDto } from './dto/create-demanda-status-movimento.dto.js';
import { UpdateDemandaStatusMovimentoDto } from './dto/update-demanda-status-movimento.dto.js';

@Controller('demanda-status-movimento')
export class DemandaStatusMovimentoController {
  constructor(private readonly demandaStatusMovimentoService: DemandaStatusMovimentoService) {}

  @Post()
  create(@Body() createDemandaStatusMovimentoDto: CreateDemandaStatusMovimentoDto) {
    return this.demandaStatusMovimentoService.create(createDemandaStatusMovimentoDto);
  }

  @Get()
  findAll() {
    return this.demandaStatusMovimentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demandaStatusMovimentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemandaStatusMovimentoDto: UpdateDemandaStatusMovimentoDto) {
    return this.demandaStatusMovimentoService.update(+id, updateDemandaStatusMovimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demandaStatusMovimentoService.remove(+id);
  }
}
