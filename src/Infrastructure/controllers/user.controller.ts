import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from 'src/Aplication/dto';
import { UserUseCases } from 'src/Aplication/use-case/user/user.use-case';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @Get()
  async getAll() {
    return this.userUseCases.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userUseCases.getById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userUseCases.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userUseCases.delete(id);
  }
}
