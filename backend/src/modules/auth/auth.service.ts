import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/modules/user/user.entity';
import { UserService } from 'src/modules/user/user.service';
// import { SigninObj } from 'src/shared/interfaces/user.interface';

@Injectable()
export class AuthService {
  //   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const detail = username.includes('@') ? { email: username } : { username };

    const user = await this.userService.getUser(detail);
    console.log(user);

    if (user && bcrypt.compare(password, user.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  //   async signup(user: User): Promise<User> {
  //     const userOb = new User();

  //     userOb.firstname = user['firstname'];
  //     userOb.lastname = user['lastname'];
  //     userOb.email = user['email'];
  //     userOb.password = user['password'];
  //     userOb.username = user['username'];

  //     userOb.hashPassword();

  //     // const newUser = userOb();
  //     return userOb.save();
  //   }
  async signup(user: User): Promise<User> {
    const userOb = new this.userModel(user);
    // user.hashPassword();
    console.log(userOb);

    // userOb.firstname = user.firstname;
    // userOb.lastname = user.lastname;
    // userOb.email = user.email;
    // userOb.password = user.password;
    // userOb.username = user.username;

    // console.log(userOb);

    return userOb.save();
  }

  //   async createProject(project: Project): Promise<Project> {
  //     const newProject = new this.projectModel(project);
  //     return newProject.save();
  //   }
}
