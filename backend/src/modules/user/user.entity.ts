import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    default: 'user',
    enum: ['user', 'admin'],
  })
  userRole: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    default: Date.now,
  })
  updatedAt: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);

// Define a pre-save middleware to hash the password before saving
UserSchema.pre('save', async function (next) {
  // 'this' refers to the current User document

  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10); // You can adjust the salt rounds
  }
  next();
});

export type UserDocument = User & Document;
