import {
  Body,
  Controller,
  Delete,
  Get,
  Param, // extrai o valor
  ParseIntPipe, // Converte "1" para 1
  Patch, 
  Post,
} from '@nestjs/common';
import { LocalService } from './local.service.js';

import { CreateLocalDto } from './dto/create-local.dto.js';
import { UpdateLocalDto } from './dto/update-local.dto.js';

@Controller('locais')
export class LocalController {

  constructor(private readonly localService: LocalService) { }

  @Get()
  findAll() {
    return this.localService.findAll();
  }

  @Get(':id') // define parte da url
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.localService.findOne(id);
  }

  @Post()
  create(@Body() createLocalDto: CreateLocalDto) { // @Body pega o corpo do JSON enviado
    return this.localService.create(createLocalDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLocalDto: UpdateLocalDto,
  ) {
    return this.localService.update(id, updateLocalDto);
  }

  @Delete(':id')
  deactivate(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.localService.deactivate(id)
  }
}
