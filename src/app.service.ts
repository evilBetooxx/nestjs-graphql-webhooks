import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createOrder(data) {
    return data;
  }
}
