import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Webhook } from './entities/webhook.entity';
import { WebhooksService } from './webhooks.service';
import { CreateWebhookInput } from './dto/create-webhook.input';
import { UpdateWebhookInput } from './dto/update-webhook.input';
import { ObjectId } from 'mongodb';

@Resolver(() => Webhook)
export class WebhooksResolver {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Mutation(() => Webhook)
  createWebhook(
    @Args('createWebhookInput') createWebhookInput: CreateWebhookInput,
  ) {
    return this.webhooksService.create(createWebhookInput);
  }

  @Query(() => [Webhook], { name: 'webhooks' })
  findAll() {
    return this.webhooksService.findAll();
  }

  @Query(() => Webhook, { name: 'webhook' })
  findOne(@Args('id', { type: () => ObjectId }) id: ObjectId) {
    return this.webhooksService.findOne(id);
  }

  @Mutation(() => Webhook)
  updateWebhook(
    @Args('id', { type: () => ObjectId }) id: ObjectId,
    @Args('updateWebhookInput') updateWebhookInput: UpdateWebhookInput,
  ) {
    return this.webhooksService.update(id, updateWebhookInput);
  }

  @Mutation(() => Webhook)
  removeWebhook(@Args('id', { type: () => ObjectId }) id: ObjectId) {
    return this.webhooksService.remove(id);
  }
}
