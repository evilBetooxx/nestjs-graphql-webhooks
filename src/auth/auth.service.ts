import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { hash, compare } from 'bcrypt';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(regitserAuthDto: RegisterAuthDto): Promise<{ token: string }> {
    const { username, password } = regitserAuthDto;
    const existingUser = await this.userService.findOneByUsername(username);
    if (existingUser) {
      throw new Error('El usuario ya existe');
    }
    const hashedPassword = await hash(password, 10);

    const newUser = await this.userService.create({
      username,
      password: hashedPassword,
    });

    const token = await this.jwtService.signAsync({ sub: newUser.id });

    return { token };
  }

  async signIn(loginAuthDto: LoginAuthDto): Promise<{ token: string }> {
    const { username, password } = loginAuthDto;
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Usuario Incorrecto');
    }

    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña Incorrecta');
    }
    const token = await this.jwtService.signAsync({ sub: user.id });

    return { token };
  }

  async getToken (): Promise<string> {
    return this.jwtService.sign({ sub: 1 })
  }
}
