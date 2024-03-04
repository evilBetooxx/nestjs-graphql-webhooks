import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { AppController } from './app.controller';

import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CarsModule } from './cars/cars.module';
import { WebhooksModule } from './webhooks/webhooks.module';
import { MotorcycleModule } from './motorcycle/motorcycle.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'cars',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HttpModule,
    AuthModule,
    UserModule,
    CarsModule,
    WebhooksModule,
    MotorcycleModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
