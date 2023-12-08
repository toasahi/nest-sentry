import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://1c0b49a4c1e77ae9dda7c249a0b57e52@o4506357249409024.ingest.sentry.io/4506357265596416",
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}


bootstrap();
