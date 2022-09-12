import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './entity/create-user.dto';
import { UpdateUserDto } from './entity/update-user.dto';

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

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: UpdateUserDto,
    @Param('id') id: string
  ) {
    const user = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'User updated!',
      success: true,
      data: user,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const user = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'User deleted!',
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

  @Get('/:id')
  async get(@Res() res: Response, @Param('id') id: string) {
    const user = await this.service.get(id);
    return res.status(HttpStatus.OK).json({
      message: 'User',
      success: true,
      data: user,
    });
  }
}
