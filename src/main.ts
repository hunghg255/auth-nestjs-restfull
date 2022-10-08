import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();

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
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`Server started running on http://localhost:${PORT}`);
}
bootstrap();
