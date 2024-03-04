import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Car {
  @ObjectIdColumn()
  @Field()
  id: ObjectId;

  @Column()
  @Field()
  model: string;

  @Column()
  @Field((type) => Int)
  year: number;
}
