import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType('MotorCycle')
@InputType('MotorCycleInput')
@Entity('Motorcycles')
export class Motorcycle {
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
