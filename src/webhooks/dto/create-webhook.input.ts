import { InputType, Field } from '@nestjs/graphql';
import {
  IsUrl,
  IsArray,
  ArrayNotEmpty,
  ArrayUnique,
  IsOptional,
} from 'class-validator';

@InputType()
export class CreateWebhookInput {
  @Field()
  @IsUrl()
  url: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  events: string[];
}
