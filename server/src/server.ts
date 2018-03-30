import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app/app.module';
import { AnyExceptionFilter } from './app/services/filters/any-exception.filter';
import { HttpValidationExceptionFilter } from './app/services/filters/http-validation.filter';
import { DatabaseExceptionFilter } from './app/services/filters/database-exceptions.filter';
import { ValidationPipe } from './app/services/pipe/validation.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import expressApp from './app/config/express.config';
import { RolesGuard } from "./app/services/guards";
import { NestApplicationOptions } from "@nestjs/common/interfaces/nest-application-options.interface";

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, <NestApplicationOptions>expressApp);
  app.setGlobalPrefix("/api/");
  const options = new DocumentBuilder()
    .setTitle('Cardholder')
    .setDescription('The cardholder API description')
    .setVersion('1.0')
    .addTag('cardholder')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  app.useGlobalFilters(
    new AnyExceptionFilter(),
    new HttpValidationExceptionFilter(),
    new DatabaseExceptionFilter()
  );
  app.useGlobalPipes(new ValidationPipe());

  const port = Number(process.env.PORT) || 3000;
  await app.listen(port, () => {
    console.log('|----------------------------------------------------------|');
    console.log(`|       Server listening: http://localhost:${port}       |`);
    console.log('|----------------------------------------------------------|');
    console.log(`| Swagger Documentation -> http://localhost:${port}/api/docs |`);
    console.log('|----------------------------------------------------------|');
    console.log(`|     Launch: ${new Date()}      |`);
    console.log('|----------------------------------------------------------|');
  });
}
bootstrap();
