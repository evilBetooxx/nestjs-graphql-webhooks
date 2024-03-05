import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule],
  providers: [AuthService, AuthResolver, JwtService],
})
export class AuthModule {}
