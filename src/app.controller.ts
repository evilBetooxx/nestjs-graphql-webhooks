import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Post('/order')
  createOrder(@Body() data) {
    const createdOrder = this.appService.createOrder(data);

    this.httpService
      .post('https://webhook.site/4f03ab92-e3fe-48d3-9471-b740881291f4', data)
      .subscribe({
        complete: () => console.log('Webhook sent'),
        error: (error) => console.log('Error sending webhook', error),
      });

    return createdOrder;
  }
}
