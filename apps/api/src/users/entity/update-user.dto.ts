import { IsString, IsArray, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  username?: string;

  @IsArray()
  @IsOptional()
  description?: string[];

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  created_at?: string;
}
