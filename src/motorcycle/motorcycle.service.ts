import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ObjectId } from 'typeorm';
import { Motorcycle } from './entities/motorcycle.entity';
import { CreateMotorcycleInput } from './dto/create-motorcycle.input';
import { UpdateMotorcycleInput } from './dto/update-motorcycle.input';

@Injectable()
export class MotorcycleService {
  constructor(
    @InjectRepository(Motorcycle)
    private readonly motorcycleRepository: Repository<Motorcycle>,
  ) {}

  async create(
    createMotorcycleInput: CreateMotorcycleInput,
  ): Promise<Motorcycle> {
    const { brand, model, year } = createMotorcycleInput;
    const motorcycle = this.motorcycleRepository.create({ brand, model, year });
    return this.motorcycleRepository.save(motorcycle);
  }

  async findAll(): Promise<Motorcycle[]> {
    return this.motorcycleRepository.find();
  }

  async findOne(id: ObjectId): Promise<Motorcycle> {
    const objectId = new ObjectId(id);
    return this.motorcycleRepository.findOne({ where: { id: objectId } });
  }

  async update(
    id: ObjectId,
    updateMotorcycleInput: UpdateMotorcycleInput,
  ): Promise<Motorcycle> {
    const objectId = new ObjectId(id);
    await this.motorcycleRepository.update(objectId, updateMotorcycleInput);
    return this.motorcycleRepository.findOne({ where: { id: objectId } });
  }

  async remove(id: ObjectId): Promise<boolean> {
    const result = await this.motorcycleRepository.delete(id);
    return result.affected > 0;
  }
}
