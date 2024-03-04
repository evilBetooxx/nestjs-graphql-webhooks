import { Test, TestingModule } from '@nestjs/testing';
import { MotorcycleResolver } from './motorcycle.resolver';
import { MotorcycleService } from './motorcycle.service';

describe('MotorcycleResolver', () => {
  let resolver: MotorcycleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MotorcycleResolver, MotorcycleService],
    }).compile();

    resolver = module.get<MotorcycleResolver>(MotorcycleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
