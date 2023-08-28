import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { MONGO_URI } from './config/env.config';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), ProjectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
