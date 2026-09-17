import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocalPorUsuarioDto } from './dto/create-local-por-usuario.dto.js';
import { LocalPorUsuario } from './entities/local-por-usuario.entity.js';

@Injectable()
export class LocalPorUsuarioService {
  constructor(
    @InjectRepository(LocalPorUsuario)
    private readonly localPorUsuarioRepository: Repository<LocalPorUsuario>,
  ) {}

  create(
    createLocalPorUsuarioDto: CreateLocalPorUsuarioDto,
  ): Promise<LocalPorUsuario> {
    const entity = this.localPorUsuarioRepository.create(
      createLocalPorUsuarioDto,
    );

    return this.localPorUsuarioRepository.save(entity);
  }

  findAll(): Promise<LocalPorUsuario[]> {
    return this.localPorUsuarioRepository.find();
  }

  async findOne(
    localId: number,
    usuarioId: number,
  ): Promise<LocalPorUsuario> {
    const entity = await this.localPorUsuarioRepository.findOneBy({
      localId,
      usuarioId,
    });

    if (!entity) {
      throw new NotFoundException(
        `Vinculo entre local ${localId} e usuario ${usuarioId} nao encontrado`,
      );
    }

    return entity;
  }
}
