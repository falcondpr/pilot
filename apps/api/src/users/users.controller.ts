import { Response } from 'express';
import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './entity/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateUserDto) {
    const user = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'User created!',
      success: true,
      data: user,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const users = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'All users',
      success: true,
      data: users,
    });
  }
}
