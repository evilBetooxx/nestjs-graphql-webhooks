import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarService } from './cars.service';
import { Webhook } from 'src/webhooks/entities/webhook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Webhook])],
  providers: [CarsResolver, CarService],
  exports: [CarService],
})
export class CarsModule {}
