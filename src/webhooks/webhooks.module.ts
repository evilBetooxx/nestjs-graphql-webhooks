import { Module } from '@nestjs/common';
import { WebhooksService } from './webhooks.service';
import { WebhooksResolver } from './webhooks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Webhook } from './entities/webhook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Webhook])],
  providers: [WebhooksResolver, WebhooksService],
  exports: [WebhooksService],
})
export class WebhooksModule {}
