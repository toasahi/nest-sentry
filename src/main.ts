import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}


bootstrap();
