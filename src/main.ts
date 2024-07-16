import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as proceess from 'process';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://educate-iust-edu-l182j5s9n-1rivalis-projects.vercel.app', // or '*' to allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable this if you need to pass cookies with requests
  });
  await app.listen(process.env.PORT!, '0.0.0.0');
}
bootstrap();
