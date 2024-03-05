import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectId } from 'typeorm';
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

  async findOne(id: ObjectId): Promise<Webhook> {
    const objectId = new ObjectId(id);
    return this.webhookRepository.findOne({ where: { id: objectId } });
  }

  async update(
    id: ObjectId,
    updateWebhookInput: UpdateWebhookInput,
  ): Promise<Webhook> {
    const objectId = new ObjectId(id);
    await this.webhookRepository.update(objectId, updateWebhookInput);
    return this.webhookRepository.findOne({ where: { id: objectId } });
  }

  async remove(id: ObjectId): Promise<boolean> {
    const result = await this.webhookRepository.delete(id);
    return result.affected > 0;
  }
}
