import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signUpDto } from './dto/signUp.dto';
import { loginDto } from './dto/login.dto';
import { refreshDto } from './dto/refresh.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @ApiOperation({
    summary: 'sing up',
    description: 'Enter email, password and name to register',
  })
  @ApiBody({ type: signUpDto })
  signUp(@Body() body: signUpDto) {
    return this.authService.signUp(body);
  }

  @Post('/login')
  @ApiOperation({
    summary: 'log in',
    description: 'Enter email and password to log in.',
  })
  @ApiBody({ type: loginDto })
  login(@Body() body: loginDto) {
    return this.authService.login(body);
  }

  @Post('/refresh')
  @ApiOperation({
    summary: 'refreshToken',
    description: 'Enter refreshToken to get accessToken.',
  })
  @ApiBody({ type: loginDto })
  refresh(@Body() body: refreshDto) {
    return this.authService.refresh(body.refresh);
  }
}
