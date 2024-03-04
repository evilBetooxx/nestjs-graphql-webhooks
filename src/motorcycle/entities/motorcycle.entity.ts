import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Motorcycle {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
