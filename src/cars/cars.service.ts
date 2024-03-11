import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { Webhook } from 'src/webhooks/entities/webhook.entity';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import axios from 'axios';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
    @InjectRepository(Webhook)
    private readonly webhookRepository: Repository<Webhook>,
  ) {}

  async create(createCarInput: CreateCarInput): Promise<Car> {
    const { brand, model, year } = createCarInput;
    const car = this.carRepository.create({ brand, model, year });
    // Obtener todos los webhooks registrados
    const webhooks = await this.webhookRepository.find();
    // Enviar una solicitud POST a cada URL con los datos del nuevo carro
    for (const webhook of webhooks) {
      for (const event of webhook.events) {
        if (event === 'newCar') {
          try {
            await axios.post(webhook.url, {
              brand,
              model,
              year,
            });
          } catch (error) {
            console.error(`Error al enviar webhook a ${webhook.url}:`, error);
          }
        }
      }
    }
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
