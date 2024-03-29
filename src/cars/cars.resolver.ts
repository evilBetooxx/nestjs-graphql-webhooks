import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Car } from './entities/car.entity';
import { CarService } from './cars.service';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Public } from 'src/auth/guard/public.decorator';

@Public()
@Resolver(() => Car)
export class CarsResolver {
  constructor(private readonly carsService: CarService) {}

  @Mutation(() => Car)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carsService.create(createCarInput);
  }

  @Query(() => [Car], { name: 'cars' })
  findAll() {
    return this.carsService.findAll();
  }

  @Query(() => Car, { name: 'car' })
  findOne(@Args('id') id: string) {
    return this.carsService.findOne(id);
  }

  @Mutation(() => Car)
  updateCar(
    @Args('id') id: string,
    @Args('updateCarInput') updateCarInput: UpdateCarInput,
  ) {
    return this.carsService.update(id, updateCarInput);
  }

  @Mutation(() => Car)
  removeCar(@Args('id') id: string) {
    return this.carsService.remove(id);
  }
}
