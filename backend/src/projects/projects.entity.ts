import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Project extends Document {
  @Prop({ required: true })
  projectName: string;

  @Prop({ required: true })
  projectDesc: string;

  @Prop()
  dateCreated: number;

  @Prop()
  codeLink: string;

  @Prop()
  liveLink: string;

  @Prop({
    default: 'fullstack',
    enum: ['frontend', 'backend', 'fullstack', 'devops'],
  })
  projectType: string;

  @Prop()
  framework: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
export type ProjectDocument = Project & Document;
