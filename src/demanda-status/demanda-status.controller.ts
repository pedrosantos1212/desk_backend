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
import { DemandaStatusService } from './demanda-status.service.js';
import { CreateDemandaStatusDto } from './dto/create-demanda-status.dto.js';
import { UpdateDemandaStatusDto } from './dto/update-demanda-status.dto.js';

@Controller('demanda-status')
export class DemandaStatusController {
  constructor(private readonly service: DemandaStatusService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateDemandaStatusDto) {
    return this.service.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateDemandaStatusDto,
  ) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.service.deactivate(id);
  }
}
