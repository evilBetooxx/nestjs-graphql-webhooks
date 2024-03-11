import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Motorcycle } from './entities/motorcycle.entity';
import { MotorcycleService } from './motorcycle.service';
import { CreateMotorcycleInput } from './dto/create-motorcycle.input';
import { UpdateMotorcycleInput } from './dto/update-motorcycle.input';
import { Public } from 'src/auth/guard/public.decorator';

@Public()
@Resolver(() => Motorcycle)
export class MotorcycleResolver {
  constructor(private readonly motorcyclesService: MotorcycleService) {}

  @Mutation(() => Motorcycle)
  createMotorcycle(
    @Args('createMotorcycleInput') createMotorcycleInput: CreateMotorcycleInput,
  ) {
    return this.motorcyclesService.create(createMotorcycleInput);
  }

  @Query(() => [Motorcycle], { name: 'motorcycles' })
  findAll() {
    return this.motorcyclesService.findAll();
  }

  @Query(() => Motorcycle, { name: 'motorcycle' })
  findOne(@Args('id') id: string) {
    return this.motorcyclesService.findOne(id);
  }

  @Mutation(() => Motorcycle)
  updateMotorcycle(
    @Args('id') id: string,
    @Args('updateMotorcycleInput') updateMotorcycleInput: UpdateMotorcycleInput,
  ) {
    return this.motorcyclesService.update(id, updateMotorcycleInput);
  }

  @Mutation(() => Motorcycle)
  removeMotorcycle(@Args('id') id: string) {
    return this.motorcyclesService.remove(id);
  }
}
