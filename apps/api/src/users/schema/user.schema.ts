import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop([String])
  name: string;

  @Prop([String])
  email: string;

  @Prop([String])
  username: string;

  @Prop([Array])
  description: [];

  @Prop([String])
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
