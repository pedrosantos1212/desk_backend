import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Demanda } from '../../demanda/entities/demanda.entity.js';
import { Usuario } from '../../usuario/entities/usuario.entity.js';

@Entity('demanda_participante')
export class DemandaParticipante {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'usuario_id', type: 'integer' })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;

  @Column({ name: 'demanda_id', type: 'integer' })
  demandaId: number;

  @ManyToOne(() => Demanda, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'demanda_id' })
  demanda: Demanda;

  @Column({ type: 'varchar', length: 45 })
  papel: string;

  @Column({ name: 'adicionado_por_id', type: 'integer' })
  adicionadoPorId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'adicionado_por_id' })
  adicionadoPor: Usuario;

  @CreateDateColumn({
    name: 'entrou_em',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  entrouEm: Date;

  @Column({ name: 'saiu_em', type: 'timestamptz', nullable: true }) // fica NULL enquanto o participante estiver na demanda
  saiuEm: Date | null;

  @Column({ name: 'removido_por_id', type: 'integer', nullable: true })
  removidoPorId: number | null;

  @ManyToOne(() => Usuario, { nullable: true, onDelete: 'RESTRICT' }) // relacao opcional porque o participante pode ainda nao ter sido removido
  @JoinColumn({ name: 'removido_por_id' })
  removidoPor: Usuario | null;

  @Column({ name: 'motivo_saida', type: 'text', nullable: true })
  motivoSaida: string | null;
}
