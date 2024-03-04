import { CreateWebhookInput } from './create-webhook.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWebhookInput extends PartialType(CreateWebhookInput) {
  @Field(() => Int)
  id: number;
}
