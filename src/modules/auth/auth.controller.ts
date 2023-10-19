import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin';
import { SignupDTO } from './dto/signup';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signDto: SigninDto) {
    return this.authService.signin(signDto);
  }

  @Post('signup')
  create(@Body() signupDTO: SignupDTO) {
    return this.authService.signup(signupDTO);
  }
}
