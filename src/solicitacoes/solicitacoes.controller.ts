import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service.js';
import { CreateSolicitacaoDto } from './dto/create-solicitacoes.dto.js';
import { UpdateSolicitacaoDto } from './dto/update-solicitacoes.dto.js';

@Controller('solicitacoes')
export class SolicitacoesController {
  constructor(private readonly solicitacoesService: SolicitacoesService) {}

  @Post()
  create(@Body() createSolicitacaoDto: CreateSolicitacaoDto) {
    return this.solicitacoesService.create(createSolicitacaoDto);
  }

  @Get()
  findAll() {
    return this.solicitacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.solicitacoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSolicitacaoDto: UpdateSolicitacaoDto,
  ) {
    return this.solicitacoesService.update(id, updateSolicitacaoDto);
  }
}
