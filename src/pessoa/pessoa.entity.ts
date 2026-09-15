import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pessoa') // Mapeia a classe para a tabela
export class Pessoa {
  @PrimaryGeneratedColumn('identity') // ID gerado pelo PostgreSQL
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  telefone: string | null;
}
