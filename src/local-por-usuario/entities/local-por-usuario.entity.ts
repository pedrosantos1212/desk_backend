import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity.js';
import { Local } from '../../local/local.entity.js';

@Entity('local_por_usuario')
export class LocalPorUsuario {
  @PrimaryColumn({ name: 'local_id', type: 'integer' })
  localId: number;

  @ManyToOne(() => Local, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'local_id' })
  local: Local;

  @PrimaryColumn({ name: 'usuario_id', type: 'integer' })
  usuarioId: number;

  @ManyToOne(() => Usuario, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'usuario_id' })
  usuario: Usuario;
}
