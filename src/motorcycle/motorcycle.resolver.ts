import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MotorcycleService } from './motorcycle.service';
import { Motorcycle } from './entities/motorcycle.entity';
import { CreateMotorcycleInput } from './dto/create-motorcycle.input';
import { UpdateMotorcycleInput } from './dto/update-motorcycle.input';

@Resolver(() => Motorcycle)
export class MotorcycleResolver {
  constructor(private readonly motorcycleService: MotorcycleService) {}

  @Mutation(() => Motorcycle)
  createMotorcycle(@Args('createMotorcycleInput') createMotorcycleInput: CreateMotorcycleInput) {
    return this.motorcycleService.create(createMotorcycleInput);
  }

  @Query(() => [Motorcycle], { name: 'motorcycle' })
  findAll() {
    return this.motorcycleService.findAll();
  }

  @Query(() => Motorcycle, { name: 'motorcycle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.motorcycleService.findOne(id);
  }

  @Mutation(() => Motorcycle)
  updateMotorcycle(@Args('updateMotorcycleInput') updateMotorcycleInput: UpdateMotorcycleInput) {
    return this.motorcycleService.update(updateMotorcycleInput.id, updateMotorcycleInput);
  }

  @Mutation(() => Motorcycle)
  removeMotorcycle(@Args('id', { type: () => Int }) id: number) {
    return this.motorcycleService.remove(id);
  }
}
