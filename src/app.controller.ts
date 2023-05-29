import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Viva Junior';
  }

  @Post('users')
  createUser(@Body() payload: any) {
    return {
      message: 'Creacion de usuario',
      payload,
    };
  }

}
