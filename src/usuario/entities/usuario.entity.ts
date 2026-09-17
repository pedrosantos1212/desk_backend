import {
  Column,
  Entity,
  JoinColumn, // informa a coluna fisica que guarda a chave estrangeira da relação
  ManyToOne, // representa o relacionamento 1:n
  OneToOne, // relacionamento 1:1
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Cargo } from '../../cargo/cargo.entity.js';
import { Pessoa } from '../../pessoa/pessoa.entity.js';
import { Senioridade } from '../../senioridade/senioridade.entity.js';
import { Setor } from '../../setor/setor.entity.js';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'cargo_id', type: 'integer' })
  cargoId: number; // propriedade TypeScript

  @ManyToOne(() => Cargo, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'cargo_id' })
  cargo: Cargo; // objeto relacionado

  @Column({ name: 'senioridade_id', type: 'integer' })
  senioridadeId: number;

  @ManyToOne(() => Senioridade, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'senioridade_id' })
  senioridade: Senioridade;

  @Column({ name: 'pessoa_id', type: 'integer', unique: true })
  pessoaId: number;

  @OneToOne(() => Pessoa, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'pessoa_id' })
  pessoa: Pessoa;

  @Column({ name: 'setor_id', type: 'integer' })
  setorId: number;

  @ManyToOne(() => Setor, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'setor_id' })
  setor: Setor;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({
    name: 'senha_hash',
    type: 'varchar',
    length: 255,
    select: false, // não traz senha em consultas comuns
  })
  senhaHash: string;
}
