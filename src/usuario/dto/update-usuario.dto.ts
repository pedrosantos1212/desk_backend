import { 
    PartialType, // todos de create podem ser editado
    PickType  // nem todos, na verdade é só esses
} from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto.js';

export class UpdateUsuarioDto extends PartialType( 
    PickType(CreateUsuarioDto,[
        'cargoId',
        'senioridadeId',
        'setorId'
    ] as const), // as const = permite que qualquer combinação deles seja enviada na atualização
 ) {}
