import { Injectable } from '@nestjs/common';
import { BlogPost, BlogPostDocument } from './blog-posts.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectModel(BlogPost.name) private blogPostModel: Model<BlogPostDocument>,
  ) {}

  async getAllPost(): Promise<BlogPost[]> {
    return this.blogPostModel.find().exec();
  }

  async createPost(post: BlogPost): Promise<BlogPost> {
    const newPost = new this.blogPostModel(post);
    return newPost.save();
  }

  async updatePost(id: string, post: BlogPost): Promise<BlogPost> {
    post.updatedAt = new Date();
    return this.blogPostModel.findByIdAndUpdate(id, post, { new: true });
  }

  async deletePost(id: string): Promise<BlogPost | string> {
    const post = await this.blogPostModel.findByIdAndDelete(id).exec();

    if (!post) {
      return 'Post not found';
    }
    return 'deleted successfully';
  }
}
