import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { DemandaService } from './demanda.service.js';
import { CreateDemandaDto } from './dto/create-demanda.dto.js';
import { UpdateDemandaDto } from './dto/update-demanda.dto.js';

@Controller('demanda')
export class DemandaController {
  constructor(private readonly demandaService: DemandaService) {}

  @Post()
  create(@Body() createDemandaDto: CreateDemandaDto) {
    return this.demandaService.create(createDemandaDto);
  }

  @Get()
  findAll() {
    return this.demandaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.demandaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDemandaDto: UpdateDemandaDto,
  ) {
    return this.demandaService.update(id, updateDemandaDto);
  }
}
