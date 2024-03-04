import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhooksResolver } from './webhooks.resolver';

@Module({
  providers: [WebhooksResolver, WebhooksService],
})
export class WebhooksModule {}
