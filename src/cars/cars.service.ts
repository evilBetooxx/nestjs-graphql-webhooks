// car/car.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId, Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import mongoose from 'mongoose';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarInput: CreateCarInput): Promise<Car> {
    const { brand, model, year } = createCarInput;
    const car = this.carRepository.create({ brand, model, year });
    return this.carRepository.save(car);
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findOne(id: ObjectId): Promise<Car> {
    const objectId = new mongoose.Types.ObjectId(id);
    return this.carRepository.findOne({ where: { id: objectId } });
  }

  async update(
    id: string | ObjectId,
    updateCarInput: UpdateCarInput,
  ): Promise<Car> {
    const objectId = new ObjectId(id);
    await this.carRepository.update(objectId, updateCarInput);
    return this.carRepository.findOne({ where: { id: objectId } });
  }

  async remove(id: ObjectId): Promise<boolean> {
    const objectId = new ObjectId(id);
    const result = await this.carRepository.delete(objectId);
    return result.affected > 0;
  }
}
