import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuario:Repository<Usuario>
  ){}

  async create(createDTO: CreateUsuarioDto): Promise<Usuario> {
  // senha assim por causa do select
  const { senha, ...dadosUsuario } = createDTO; 

  const entity = this.usuario.create({
    ...dadosUsuario,
    senhaHash: senha,
  });

  const usuarioSalvo = await this.usuario.save(entity);

  return this.findOne(usuarioSalvo.id);
}

  findAll(): Promise<Usuario[]> {
    return this.usuario.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const entity = await this.usuario.findOneBy({id})

    if (!entity) {
          throw new NotFoundException(`Usuario com id ${id} não encontrado`);
        }

    return entity;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const entity = await this.findOne(id)
    if (updateUsuarioDto.cargoId !== undefined) {
      entity.cargoId = updateUsuarioDto.cargoId;
    }

    if (updateUsuarioDto.senioridadeId !== undefined) {
      entity.senioridadeId = updateUsuarioDto.senioridadeId;
    }

    if (updateUsuarioDto.setorId !== undefined) {
      entity.setorId = updateUsuarioDto.setorId;
    }
    
    return this.usuario.save(entity);
  }

  async deativate(id: number): Promise<Usuario> {
    const entity = await this.findOne(id)
    
    entity.status = false;

    return this.usuario.save(entity);
  }
}
