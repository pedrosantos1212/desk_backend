import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LocalPorUsuarioService } from './local-por-usuario.service.js';
import { CreateLocalPorUsuarioDto } from './dto/create-local-por-usuario.dto.js';

@Controller('local-por-usuario')
export class LocalPorUsuarioController {
  constructor(private readonly localPorUsuarioService: LocalPorUsuarioService) {}

  @Post()
  create(@Body() createLocalPorUsuarioDto: CreateLocalPorUsuarioDto) {
    return this.localPorUsuarioService.create(createLocalPorUsuarioDto);
  }

  @Get()
  findAll() {
    return this.localPorUsuarioService.findAll();
  }

  @Get(':localId/:usuarioId')
  findOne(
    @Param('localId', ParseIntPipe) localId: number,
    @Param('usuarioId', ParseIntPipe) usuarioId: number,
  ) {
    return this.localPorUsuarioService.findOne(localId, usuarioId);
  }
}
