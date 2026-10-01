import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { DemandaStatusMovimentoService } from './demanda-status-movimento.service.js';
import { CreateDemandaStatusMovimentoDto } from './dto/create-demanda-status-movimento.dto.js';

@Controller('demanda-status-movimento')
export class DemandaStatusMovimentoController {
  constructor(
    private readonly movimentoService: DemandaStatusMovimentoService,
  ) {}

  @Post()
  create(@Body() createMovimentoDto: CreateDemandaStatusMovimentoDto) {
    return this.movimentoService.create(createMovimentoDto);
  }

  @Get()
  findAll() {
    return this.movimentoService.findAll();
  }

  @Get('demanda/:demandaId')
  findByDemanda(
    @Param('demandaId', ParseIntPipe) demandaId: number,
  ) {
    return this.movimentoService.findByDemanda(demandaId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movimentoService.findOne(id);
  }
}
