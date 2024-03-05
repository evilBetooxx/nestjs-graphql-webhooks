import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';
import { Entity, ObjectIdColumn, ObjectId, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@ObjectType('WebHook')
@InputType('CreateWeebHookInput')
@Entity('WebhHooks')
export class Webhook {
  @ObjectIdColumn()
  @Field(() => ID)
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
