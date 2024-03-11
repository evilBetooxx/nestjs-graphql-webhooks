import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Motorcycle {
  @Field(() => ID)
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column()
  brand: string;

  @Field()
  @Column()
  model: string;

  @Field()
  @Column()
  year: number;
}
