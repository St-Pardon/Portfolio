import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): string {
    return 'Welcome to portfoilo backend api, see docs to get';
  }
}
