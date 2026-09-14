import { Injectable, 
  NotFoundException, // exceção do NestJS convertida automaticamente em HTTP 404
  } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Local } from './local.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateLocalDto } from './dto/create-local.dto.js';
import { UpdateLocalDto } from './dto/update-local.dto.js';

@Injectable()
export class LocalService {

  constructor(
    @InjectRepository(Local) // solicita o Repository da entidade
    private readonly localRepository: Repository<Local>, // trabalhara com tipo Local
  ) { }

  findAll(): Promise<Local[]> {
    return this.localRepository.find();
  }

  create(createLocalDto: CreateLocalDto): Promise<Local> {
    const local = this.localRepository.create(createLocalDto); // monta um obj local na memoria

    return this.localRepository.save(local); // executa a gravação no pg
  }

  async findOne(id: number): Promise<Local> { // indica que o método realiza uma operação assíncrona
   
    const local = await this.localRepository.findOneBy({ id }); 
    // espera a consulta terminar para podermos analisar o resultado.
    if (!local){
      throw new NotFoundException(`Local com id ${id} não foi encontrado`)
    }

    return local;
  }

  async update(
    id:number, 
    updateLocalDto: UpdateLocalDto,
  ): Promise<Local> {

    const local = await this.findOne(id);

    if(updateLocalDto.nome !== undefined){
      local.nome = updateLocalDto.nome;
    }
    if(updateLocalDto.status !== undefined){
      local.status = updateLocalDto.status;
    }

    return this.localRepository.save(local);
  }

  async deactivate(id: number): Promise<Local> {
  const local = await this.findOne(id);

  local.status = false;

  return this.localRepository.save(local);
}

}
