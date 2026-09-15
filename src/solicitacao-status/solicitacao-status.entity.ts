import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('solicitacao_status') // Mapeia a classe para a tabela
export class SolicitacaoStatus {
  @PrimaryGeneratedColumn('identity') // ID gerado pelo PostgreSQL
  id: number;

  @Column({ type: 'varchar', length: 45 })
  nome: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}
