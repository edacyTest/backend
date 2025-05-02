import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('CRUD DOCUMENTATION')
    .setDescription('API for managing products and owners')
    .setVersion('1.0')
    .build();
  app.enableCors({ origin: '*' })
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
