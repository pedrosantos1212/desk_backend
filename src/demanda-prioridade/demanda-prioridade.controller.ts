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
import { DemandaPrioridadeService } from './demanda-prioridade.service.js';
import { CreateDemandaPrioridadeDto } from './dto/create-demanda-prioridade.dto.js';
import { UpdateDemandaPrioridadeDto } from './dto/update-demanda-prioridade.dto.js';

@Controller('demanda-prioridades')
export class DemandaPrioridadeController {
  constructor(private readonly service: DemandaPrioridadeService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateDemandaPrioridadeDto) {
    return this.service.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDemandaPrioridadeDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.service.deactivate(id);
  }
}
