import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { systemLogger } from './shared/helpers/logger';
import { LoggingInterceptor } from 'src/shared/interceptors/response-logger.interceptor';
import { HttpExceptionFilter } from 'src/shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn']
  });

  // app.useGlobalInterceptors(new LoggingInterceptor());
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors();

  const options = new DocumentBuilder()
  .setTitle('PSO2 Gatherer API')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000).then(
    ()=> {
      systemLogger.info('App started, listening on port 3000')
    }
  );
}
bootstrap();
