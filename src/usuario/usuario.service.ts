import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { Usuario } from './entities/usuario.entity.js';
import { Pessoa } from '../pessoa/pessoa.entity.js';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async create(createDTO: CreateUsuarioDto): Promise<Usuario> {
    const pessoa = await this.pessoaRepository.findOneBy({
      id: createDTO.pessoaId,
      status: true,
    });

    if (!pessoa) {
      throw new NotFoundException('Pessoa ativa nao encontrada');
    }

    const usuarioExistente = await this.usuarioRepository.findOneBy({
      pessoaId: createDTO.pessoaId,
    });

    if (usuarioExistente) {
      throw new ConflictException('Esta pessoa ja possui um usuario');
    }

    const entity = this.usuarioRepository.create({
      ...createDTO,
      senhaHash: null,
    });
    const usuarioSalvo = await this.usuarioRepository.save(entity);

    return this.findOne(usuarioSalvo.id);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find({
      relations: {
        pessoa: true,
        cargo: true,
        senioridade: true,
        setor: true,
      },
      order: {
        id: 'ASC',
      },
    });
  }

  async findOne(id: number): Promise<Usuario> {
    const entity = await this.usuarioRepository.findOne({
      where: { id },
      relations: {
        pessoa: true,
        cargo: true,
        senioridade: true,
        setor: true,
      },
    });

    if (!entity) {
      throw new NotFoundException(`Usuario com id ${id} nao encontrado`);
    }

    return entity;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const entity = await this.findOne(id);

    Object.assign(entity, updateUsuarioDto);
    await this.usuarioRepository.save(entity);

    return this.findOne(id);
  }

  async deactivate(id: number): Promise<Usuario> {
    const entity = await this.findOne(id);

    entity.status = false;
    await this.usuarioRepository.save(entity);

    return this.findOne(id);
  }
}
