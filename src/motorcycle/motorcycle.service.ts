import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Motorcycle } from './entities/motorcycle.entity';
import { CreateMotorcycleInput } from './dto/create-motorcycle.input';
import { UpdateMotorcycleInput } from './dto/update-motorcycle.input';
import { Webhook } from 'src/webhooks/entities/webhook.entity';
import axios from 'axios';

@Injectable()
export class MotorcycleService {
  constructor(
    @InjectRepository(Motorcycle)
    private readonly motorcycleRepository: Repository<Motorcycle>,
    @InjectRepository(Webhook)
    private readonly webhookRepository: Repository<Webhook>,
  ) {}

  async create(
    createMotorcycleInput: CreateMotorcycleInput,
  ): Promise<Motorcycle> {
    const { brand, model, year } = createMotorcycleInput;
    const motorcycle = this.motorcycleRepository.create({ brand, model, year });
    // Obtener todos los webhooks registrados
    const webhooks = await this.webhookRepository.find();
    // Enviar una solicitud POST a cada URL con los datos del nuevo carro
    for (const webhook of webhooks) {
      for (const event of webhook.events) {
        if (event === 'newMotorcycle') {
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
    return this.motorcycleRepository.save(motorcycle);
  }

  async findAll(): Promise<Motorcycle[]> {
    return this.motorcycleRepository.find();
  }

  async findOne(id: string): Promise<Motorcycle> {
    return this.motorcycleRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    updateMotorcycleInput: UpdateMotorcycleInput,
  ): Promise<Motorcycle> {
    await this.motorcycleRepository.update(id, updateMotorcycleInput);
    return this.motorcycleRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.motorcycleRepository.delete(id);
    return result.affected > 0;
  }
}
