// webhook/dto/update-webhook.input.ts

import { InputType, Field } from '@nestjs/graphql';
import {
  IsUrl,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
} from 'class-validator';

@InputType()
export class UpdateWebhookInput {
  @Field({ nullable: true })
  @IsUrl()
  @IsOptional()
  url?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  events?: string[];
}
