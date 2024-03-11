import { Module } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleResolver } from './motorcycle.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motorcycle } from './entities/motorcycle.entity';
import { Webhook } from 'src/webhooks/entities/webhook.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Motorcycle, Webhook])],
  providers: [MotorcycleResolver, MotorcycleService],
  exports: [MotorcycleService],
})
export class MotorcycleModule {}
