import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development','.env.prod','.env.staging']
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
