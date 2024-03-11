import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthPayload } from './dto/auth-payload.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { Public } from './guard/public.decorator';

@Public()
@Resolver(() => AuthPayload)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthPayload)
  async signUp(@Args('registerAuthDto') registerAuthDto: RegisterAuthDto) {
    return this.authService.signUp(registerAuthDto);
  }

  @Mutation(() => AuthPayload)
  async signIn(@Args('loginAuthDto') loginAuthDto: LoginAuthDto) {
    return this.authService.signIn(loginAuthDto);
  }

  @Query(() => String)
  async getToken() {
    return this.authService.getToken();
  }
}
