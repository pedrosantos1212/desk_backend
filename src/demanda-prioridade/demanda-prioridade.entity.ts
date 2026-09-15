import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demanda_prioridade') // Mapeia a classe para a tabela
export class DemandaPrioridade {
  @PrimaryGeneratedColumn('identity') // ID gerado pelo PostgreSQL
  id: number;

  @Column({ type: 'varchar', length: 45 })
  nome: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}
