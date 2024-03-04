import { Module } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleResolver } from './motorcycle.resolver';

@Module({
  providers: [MotorcycleResolver, MotorcycleService],
})
export class MotorcycleModule {}
