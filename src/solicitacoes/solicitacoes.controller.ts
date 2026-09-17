import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacoesService } from './solicitacoes.service.js';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto.js';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto.js';

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
  findOne(@Param('id') id: string) {
    return this.solicitacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.solicitacoesService.update(+id, updateSolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacoesService.remove(+id);
  }
}
