import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
@Entity()
export class Webhook {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

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
