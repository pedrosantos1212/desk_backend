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
import { SenioridadeService } from './senioridade.service.js';
import { CreateSenioridadeDto } from './dto/create-senioridade.dto.js';
import { UpdateSenioridadeDto } from './dto/update-senioridade.dto.js';

@Controller('senioridades')
export class SenioridadeController {
  constructor(private readonly service: SenioridadeService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateSenioridadeDto) {
    return this.service.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateSenioridadeDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.service.deactivate(id);
  }
}
