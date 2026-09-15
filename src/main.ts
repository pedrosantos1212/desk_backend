import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() { // função responsavel por inicializar a aplicacao
  const app = await NestFactory.create(AppModule); // cria uma app usando modulo global

  // configura validação antes do server começar
  // a receber requisições 
    app.useGlobalPipes(
    new ValidationPipe({
      // considera permitidas propriedades que possuem decorators
      // de validação no DTO
      whitelist: true,  

      // em vez de simplesmente remover campos extras, responde com erro 400
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000); // chama a função e espera a inicialização terminar
}

await bootstrap();

