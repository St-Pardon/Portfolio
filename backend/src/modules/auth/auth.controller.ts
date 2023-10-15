import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { User } from 'src/modules/user/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  @Post('signup')
  async Signup(@Body() user: User): Promise<User> {
    // console.log(user);
    return this.authService.signup(user);
  }
}
