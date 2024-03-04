import { Injectable } from '@nestjs/common';
import { CreateMotorcycleInput } from './dto/create-motorcycle.input';
import { UpdateMotorcycleInput } from './dto/update-motorcycle.input';

@Injectable()
export class MotorcycleService {
  create(createMotorcycleInput: CreateMotorcycleInput) {
    return 'This action adds a new motorcycle';
  }

  findAll() {
    return `This action returns all motorcycle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} motorcycle`;
  }

  update(id: number, updateMotorcycleInput: UpdateMotorcycleInput) {
    return `This action updates a #${id} motorcycle`;
  }

  remove(id: number) {
    return `This action removes a #${id} motorcycle`;
  }
}
