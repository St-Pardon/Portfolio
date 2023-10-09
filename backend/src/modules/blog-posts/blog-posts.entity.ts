import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class BlogPost extends Document {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  postTitle: string;

  @Prop({ required: true })
  postDesc: string;

  @Prop({ required: true })
  postLink: string;

  @Prop({
    required: true,
    default: 'published',
    enum: ['published', 'draft'],
  })
  postStatus: string;

  @Prop()
  postImg: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);
export type BlogPostDocument = BlogPost & Document;
