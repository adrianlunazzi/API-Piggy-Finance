import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/Aplication/dto';
import { User } from 'src/Domain/entities';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.lastname = createUserDto.lastname;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    return newUser;
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const updateUser = new User();
    updateUser.name = updateUserDto.name;
    updateUser.lastname = updateUserDto.lastname;
    updateUser.email = updateUserDto.email;
    updateUser.password = updateUserDto.password;
    return updateUser;
  }
}
