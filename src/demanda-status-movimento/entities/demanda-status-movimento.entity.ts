import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DemandaStatus } from '../../demanda-status/demanda-status.entity.js';
import { Demanda } from '../../demanda/entities/demanda.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';

@Entity('demanda_status_movimento')
export class DemandaStatusMovimento {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'demanda_id', type: 'integer' })
  demandaId: number;

  @ManyToOne(() => Demanda, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'demanda_id' })
  demanda: Demanda;

  @Column({ name: 'demanda_status_id', type: 'integer' })
  demandaStatusId: number;

  @ManyToOne(() => DemandaStatus, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'demanda_status_id' })
  demandaStatus: DemandaStatus;

  @Column({ name: 'alterado_por_id', type: 'integer' })
  alteradoPorId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'alterado_por_id' })
  alteradoPor: Usuario;

  @Column({ type: 'text', nullable: true }) // nullable permite salvar NULL quando nao houver justificativa
  justificativa: string | null;

  @CreateDateColumn({
    name: 'ocorrido_em',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  ocorridoEm: Date;
}
