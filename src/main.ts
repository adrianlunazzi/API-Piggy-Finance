import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule, ENV_FILE_PATH } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  //Configuracion del CORS
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });
  //Configuracion de los global pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  //Configuracion del SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Piggy Finance API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  await app.listen(process.env.PORT);
  logger.log(
    `Server is running on Port ${process.env.PORT} || Entorno: ${ENV_FILE_PATH}`,
  );
  logger.log(`Documentacion en: ${(await app.getUrl()) + '/' + 'swagger'}`);
}
main();
