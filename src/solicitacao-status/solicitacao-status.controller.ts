import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { SolicitacaoStatusService } from './solicitacao-status.service.js';
import { CreateSolicitacaoStatusDto } from './dto/create-solicitacao-status.dto.js';
import { UpdateSolicitacaoStatusDto } from './dto/update-solicitacao-status.dto.js';

@Controller('solicitacao-status')
export class SolicitacaoStatusController {
  constructor(private readonly service: SolicitacaoStatusService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateSolicitacaoStatusDto) {
    return this.service.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateSolicitacaoStatusDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.service.deactivate(id);
  }
}
