import { InputType, PartialType } from '@nestjs/graphql';
import { LoginAuthDto } from './login-auth.dto';

@InputType()
export class RegisterAuthDto extends PartialType(LoginAuthDto) {}
