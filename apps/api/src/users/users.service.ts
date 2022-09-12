import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './entity/create-user.dto';
import { UpdateUserDto } from './entity/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel(dto);
    return user.save();
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    return user;
  }

  async delete(id: string): Promise<User> {
    const user = await this.userModel.findByIdAndDelete(id);
    return user;
  }

  async getAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async get(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }
}
