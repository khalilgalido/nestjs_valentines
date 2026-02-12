import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // <--- 1. Import this

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // <--- 2. Add this line here!
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}