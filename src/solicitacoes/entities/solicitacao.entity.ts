import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { SolicitacaoStatus } from '../../solicitacao-status/solicitacao-status.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';

@Entity('solicitacoes')
export class Solicitacao {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ name: 'solicitante_id', type: 'integer' })
  solicitanteId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'solicitante_id' })
  solicitante: Usuario;

  @Column({ name: 'criado_por_id', type: 'integer' })
  criadoPorId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'criado_por_id' })
  criadoPor: Usuario;

  @Column({ name: 'solicitacao_status_id', type: 'integer' })
  solicitacaoStatusId: number;

  @ManyToOne(() => SolicitacaoStatus, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'solicitacao_status_id' })
  solicitacaoStatus: SolicitacaoStatus;

  @CreateDateColumn({
    name: 'data_criacao',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  dataCriacao: Date;

  @UpdateDateColumn({
    name: 'alterado_em',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  alteradoEm: Date;
}
