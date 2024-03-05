import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { ObjectId } from 'mongodb';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'userById' })
  async findOneById(@Args('id') id: ObjectId) {
    return this.userService.findOne(id);
  }

  @Query(() => User, { name: 'userByUsername' })
  async findOneByUsername(@Args('username') username: string) {
    return this.userService.findOneByUsername(username);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: ObjectId,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  async removeUser(@Args('id') id: ObjectId) {
    return this.userService.remove(id);
  }
}
