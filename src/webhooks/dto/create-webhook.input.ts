import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWebhookInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
