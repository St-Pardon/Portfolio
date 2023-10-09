import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BlogPost } from './blog-posts.entity';
import { BlogPostService } from './blog-posts.service';

@Controller('/blogpost')
export class BlogPostsController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @Get()
  async getAllPost(): Promise<BlogPost[]> {
    return this.blogPostService.getAllPost();
  }

  @Post('/')
  async createPost(@Body() blog: BlogPost): Promise<BlogPost> {
    return this.blogPostService.createPost(blog);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() blog: BlogPost,
  ): Promise<BlogPost> {
    return this.blogPostService.updatePost(id, blog);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string): Promise<BlogPost | string> {
    return this.blogPostService.deletePost(id);
  }
}
