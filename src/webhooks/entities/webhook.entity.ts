import { ObjectType, Field } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Entity()
export class Webhook {
  @ObjectIdColumn()
  @Field()
  id: ObjectId;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field(() => [String], { nullable: true })
  events: string[];

  @ManyToOne(() => User, (user) => user.webhooks, { nullable: true })
  @Field(() => User)
  user: User;
}
