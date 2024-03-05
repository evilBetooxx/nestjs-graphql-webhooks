// car/dto/update-car.input.ts

import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';
import { CreateCarInput } from './create-car.input';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1900)
  year: number;
}
