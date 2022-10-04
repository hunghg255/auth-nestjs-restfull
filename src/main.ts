import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    allowedHeaders:
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Agiletech test')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document, {
    customCssUrl: 'https://api-test1.vercel.app/swagger-ui.css',
    swaggerOptions: {
      displayOperationId: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
