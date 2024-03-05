import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column, OneToMany } from 'typeorm';
import { Webhook } from 'src/webhooks/entities/webhook.entity';

@ObjectType('User')
@InputType('UserInput')
@Entity('users')
export class User {
  @ObjectIdColumn()
  @Field(() => ID)
  id: ObjectId;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => Webhook, (webhook) => webhook.user)
  @Field(() => [Webhook], { nullable: true })
  webhooks: Webhook[];
}
