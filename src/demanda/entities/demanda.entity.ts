import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { DemandaPrioridade } from '../../demanda-prioridade/demanda-prioridade.entity.js';
import { Setor } from '../../setor/setor.entity.js';
import { Solicitacao } from '../../solicitacoes/entities/solicitacoes.entity.js';

@Entity('demanda')
export class Demanda {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'solicitacoes_id', type: 'integer' })
  solicitacaoId: number;

  @ManyToOne(() => Solicitacao, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'solicitacoes_id' })
  solicitacao: Solicitacao;

  @Column({ type: 'varchar', length: 150 })
  titulo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ name: 'demanda_prioridade_id', type: 'integer' })
  demandaPrioridadeId: number;

  @ManyToOne(() => DemandaPrioridade, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'demanda_prioridade_id' })
  demandaPrioridade: DemandaPrioridade;

  @Column({ name: 'setor_responsavel_id', type: 'integer' })
  setorResponsavelId: number;

  @ManyToOne(() => Setor, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'setor_responsavel_id' })
  setorResponsavel: Setor;

  @CreateDateColumn({
    name: 'criado_em',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  criadoEm: Date;

  @UpdateDateColumn({
    name: 'atualizado_em',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  atualizadoEm: Date;
}
