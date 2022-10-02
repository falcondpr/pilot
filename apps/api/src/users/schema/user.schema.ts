import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String, required: true })
  avatar: string;

  @Prop({ default: new Date().toISOString() })
  created_at: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
