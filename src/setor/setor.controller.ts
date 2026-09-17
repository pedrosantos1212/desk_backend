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
import { SetorService } from './setor.service.js';
import { CreateSetorDto } from './dto/create-setor.dto.js';
import { UpdateSetorDto } from './dto/update-setor.dto.js';

@Controller('setores')
export class SetorController {
  constructor(private readonly setorService: SetorService) {}

  @Get()
  findAll() {
    return this.setorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.setorService.findOne(id);
  }

  @Post()
  create(@Body() createSetorDto: CreateSetorDto) {
    return this.setorService.create(createSetorDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSetorDto: UpdateSetorDto,
  ) {
    return this.setorService.update(id, updateSetorDto);
  }

  @Delete(':id')
  deactivate(@Param('id', ParseIntPipe) id: number) {
    return this.setorService.deactivate(id);
  }
}
