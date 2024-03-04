import { CreateMotorcycleInput } from './create-motorcycle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMotorcycleInput extends PartialType(CreateMotorcycleInput) {
  @Field(() => Int)
  id: number;
}
