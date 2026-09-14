import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LocalModule } from './local/local.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    LocalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
