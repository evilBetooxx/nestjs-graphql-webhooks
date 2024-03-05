import { Module } from '@nestjs/common';
import { MotorcycleService } from './motorcycle.service';
import { MotorcycleResolver } from './motorcycle.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Motorcycle } from './entities/motorcycle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Motorcycle])],
  providers: [MotorcycleResolver, MotorcycleService],
  exports: [MotorcycleService],
})
export class MotorcycleModule {}
