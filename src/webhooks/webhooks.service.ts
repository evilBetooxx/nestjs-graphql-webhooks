import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Webhook } from './entities/webhook.entity';
import { CreateWebhookInput } from './dto/create-webhook.input';
import { UpdateWebhookInput } from './dto/update-webhook.input';

@Injectable()
export class WebhooksService {
  constructor(
    @InjectRepository(Webhook)
    private readonly webhookRepository: Repository<Webhook>,
  ) {}

  async create(createWebhookInput: CreateWebhookInput): Promise<Webhook> {
    const { url, events } = createWebhookInput;
    const webhook = this.webhookRepository.create({ url, events });
    return this.webhookRepository.save(webhook);
  }

  async findAll(): Promise<Webhook[]> {
    return this.webhookRepository.find();
  }

  async findOne(id: string): Promise<Webhook> {
    return this.webhookRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    updateWebhookInput: UpdateWebhookInput,
  ): Promise<Webhook> {
    await this.webhookRepository.update(id, updateWebhookInput);
    return this.webhookRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.webhookRepository.delete(id);
    return result.affected > 0;
  }
}
