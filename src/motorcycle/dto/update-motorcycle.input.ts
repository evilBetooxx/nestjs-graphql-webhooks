import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, Min } from 'class-validator';
import { CreateMotorcycleInput } from './create-motorcycle.input';

@InputType()
export class UpdateMotorcycleInput extends PartialType(CreateMotorcycleInput) {
  @Field(() => Int)
  @IsInt()
  @Min(1900)
  year: number;
}
