import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { CargoModule } from './cargo/cargo.module.js';
import { DemandaPrioridadeModule } from './demanda-prioridade/demanda-prioridade.module.js';
import { DemandaStatusModule } from './demanda-status/demanda-status.module.js';
import { LocalModule } from './local/local.module.js';
import { PessoaModule } from './pessoa/pessoa.module.js';
import { SenioridadeModule } from './senioridade/senioridade.module.js';
import { SetorModule } from './setor/setor.module.js';
import { SolicitacaoStatusModule } from './solicitacao-status/solicitacao-status.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module.js';
import { LocalPorUsuarioModule } from './local-por-usuario/local-por-usuario.module.js';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module.js';
import { DemandaModule } from './demanda/demanda.module.js';
import { DemandaStatusMovimentoModule } from './demanda-status-movimento/demanda-status-movimento.module.js';
import { DemandaParticipanteModule } from './demanda-participante/demanda-participante.module.js';

@Module({
  imports: [
    //forRoot configura o modulo para a aplicacao e carrega o .env
    ConfigModule.forRoot({ 
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    // função que produz o objeto de configuração
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      // getOrThrow busca uma variável e causa um erro claro se ela não existir
      host: configService.getOrThrow<string>('DB_HOST'), 
      port: Number(configService.getOrThrow<string>('DB_PORT')),
      username: configService.getOrThrow<string>('DB_USERNAME'),
      password: configService.getOrThrow<string>('DB_PASSWORD'),
      database: configService.getOrThrow<string>('DB_DATABASE'),
      schema: configService.getOrThrow<string>('DB_SCHEMA'),
      autoLoadEntities: true, // carrega as entidades 
      synchronize: false, // impede alterações nas tabelas
    }),
  }),
    LocalModule,
    CargoModule,
    SenioridadeModule,
    SolicitacaoStatusModule,
    DemandaStatusModule,
    DemandaPrioridadeModule,
    PessoaModule,
    SetorModule,
    UsuarioModule,
    LocalPorUsuarioModule,
    SolicitacoesModule,
    DemandaModule,
    DemandaStatusMovimentoModule,
    DemandaParticipanteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
