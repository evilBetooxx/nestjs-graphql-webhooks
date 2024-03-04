import { Injectable } from '@nestjs/common';
import { CreateWebhookInput } from './dto/create-webhook.input';
import { UpdateWebhookInput } from './dto/update-webhook.input';

@Injectable()
export class WebhooksService {
  create(createWebhookInput: CreateWebhookInput) {
    return 'This action adds a new webhook';
  }

  findAll() {
    return `This action returns all webhooks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} webhook`;
  }

  update(id: number, updateWebhookInput: UpdateWebhookInput) {
    return `This action updates a #${id} webhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} webhook`;
  }
}
