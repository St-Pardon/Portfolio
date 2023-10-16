import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const detail = username.includes('@') ? { email: username } : { username };
    let user = await this.userService.getUser(detail);

    if (user && (await bcrypt.compare(password, user.password))) {
      user = user.toJSON();

      return user;
    }
    return null;
  }

  async login(user: any) {
    const { username, _id: userId } = user;
    const payload = { username, sub: userId };

    return {
      access_token: this.jwtService.sign(payload),
      userId,
    };
  }

  async signup(user: User): Promise<User> {
    const { firstname, lastname, email, password, username, userRole } = user;
    console.log(firstname, lastname, email, password, username, userRole);

    // Check if a user with the same email or username already exists
    const checkEmail = await this.userService.getUser({ email });
    const checkUsername = await this.userService.getUser({ username });

    if (checkEmail) {
      throw new BadRequestException('User with this email already exists.');
    }

    if (checkUsername) {
      throw new BadRequestException('User with this username already exists.');
    }

    const userOb = new this.userModel({
      firstname,
      lastname,
      email,
      password,
      username,
      userRole,
    });

    return userOb.save();
  }
}
