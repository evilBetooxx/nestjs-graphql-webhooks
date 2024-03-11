import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginAuthDto {
  @Field()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  username: string;

  @Field()
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
