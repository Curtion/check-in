import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(): object {
    return {
      msg: 'index',
    };
  }
  getHello(): object {
    return {
      msg: 'Hello World',
    };
  }
}
