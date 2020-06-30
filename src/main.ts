import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as env from 'dotenv'
import './connection'

env.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000).then(
    ()=> {
      console.log('listening on port 3000')
    }
  );
}
bootstrap();
