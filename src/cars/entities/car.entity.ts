import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType('Car')
@InputType('CarInput')
@Entity('Car')
export class Car {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

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
