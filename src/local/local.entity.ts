import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('local') // associa a classe a tabela
export class Local{
    @PrimaryGeneratedColumn('identity') // chave primaria
    id:number;

    @Column({ type: 'varchar', length:45}) // coluna comum
    nome:string;

    @Column({type:'boolean', default:true})
    status:boolean
} 