import {
  Controller,
  Request,
  Post,
  Body,
  UseGuards,
  HttpCode,
  BadRequestException,
} from '@nestjs/common';
import { User } from 'src/modules/user/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.guard';
import { UserDto, UserSchema } from 'src/shared/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  async Signup(@Body() data: UserDto): Promise<User> {
    const { error, value } = UserSchema.validate(data);

    if (error) {
      throw new BadRequestException(error.message);
    }

    return this.authService.signup(value);
  }
}
