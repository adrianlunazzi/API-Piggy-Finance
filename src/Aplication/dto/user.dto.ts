import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'The name must not be empty' })
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'The lastname must not be empty' })
  lastname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'The email must not be empty' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'The password must not be empty' })
  @MinLength(6)
  password: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastname?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;
}
