import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';

@InputType()
export class CreateMotorcycleInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  brand: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  model: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsInt()
  @Min(1900)
  year: number;
}
