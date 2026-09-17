import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalPorUsuarioDto } from './create-local-por-usuario.dto.js';

export class UpdateLocalPorUsuarioDto extends PartialType(CreateLocalPorUsuarioDto) {}
