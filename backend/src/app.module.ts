import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { MONGO_URI } from './config/env.config';
import { BlogPostsModule } from './modules/blog-posts/blog-posts.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    ProjectsModule,
    BlogPostsModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
