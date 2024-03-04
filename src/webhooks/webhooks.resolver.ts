import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WebhooksService } from './webhooks.service';
import { Webhook } from './entities/webhook.entity';
import { CreateWebhookInput } from './dto/create-webhook.input';
import { UpdateWebhookInput } from './dto/update-webhook.input';

@Resolver(() => Webhook)
export class WebhooksResolver {
  constructor(private readonly webhooksService: WebhooksService) {}

  @Mutation(() => Webhook)
  createWebhook(@Args('createWebhookInput') createWebhookInput: CreateWebhookInput) {
    return this.webhooksService.create(createWebhookInput);
  }

  @Query(() => [Webhook], { name: 'webhooks' })
  findAll() {
    return this.webhooksService.findAll();
  }

  @Query(() => Webhook, { name: 'webhook' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.webhooksService.findOne(id);
  }

  @Mutation(() => Webhook)
  updateWebhook(@Args('updateWebhookInput') updateWebhookInput: UpdateWebhookInput) {
    return this.webhooksService.update(updateWebhookInput.id, updateWebhookInput);
  }

  @Mutation(() => Webhook)
  removeWebhook(@Args('id', { type: () => Int }) id: number) {
    return this.webhooksService.remove(id);
  }
}
