import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, Column, OneToMany } from 'typeorm';
import { Webhook } from 'src/webhooks/entities/webhook.entity';

@ObjectType()
@Entity()
export class User {
  @ObjectIdColumn()
  @Field(() => ID)
  id: string;

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
