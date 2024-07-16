import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proceess from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  await app.listen(process.env.PORT!, '0.0.0.0');
}
bootstrap();
