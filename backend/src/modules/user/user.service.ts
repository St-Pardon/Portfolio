import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SigninObj } from 'src/shared/interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User | any> {
    return this.userModel.find({ _id: id }).exec();
  }

  async getUser(user: SigninObj): Promise<User | undefined> {
    return this.userModel.findOne(user);
  }

  async updateUserInfo(id: string, data: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<void> {
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
