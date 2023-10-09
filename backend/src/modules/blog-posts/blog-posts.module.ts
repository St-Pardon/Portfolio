import { Module } from '@nestjs/common';
import { BlogPostsController } from './blog-posts.controller';
import { BlogPost, BlogPostSchema } from './blog-posts.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPostService } from './blog-posts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogPost.name, schema: BlogPostSchema },
    ]),
  ],
  controllers: [BlogPostsController],
  providers: [BlogPostService],
})
export class BlogPostsModule {}
