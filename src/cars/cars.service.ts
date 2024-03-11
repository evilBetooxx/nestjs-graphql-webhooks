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

  async findOne(id: string): Promise<Car> {
    return this.carRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCarInput: UpdateCarInput): Promise<Car> {
    await this.carRepository.update(id, updateCarInput);
    return this.carRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.carRepository.delete(id);
    return result.affected > 0;
  }
}
