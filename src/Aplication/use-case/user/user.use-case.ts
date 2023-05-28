import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/Aplication/dto';
import { BaseDataServices } from 'src/Domain/base/data-service.base';
import { User } from 'src/Domain/entities';
import { UserFactoryService } from './user-factory.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: BaseDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.dataServices.user.getAll();
  }

  async getById(id: any) {
    let user: User;
    //Find by Id
    if (!user) {
      user = await this.dataServices.user.get({ where: { id } });
    }
    if (!user) throw new NotFoundException('No se encontro el id solicitado');
    return user;
  }

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const dbMail = await this.dataServices.user.get({
      where: { email },
    });
    if (dbMail)
      throw new NotFoundException(
        'there is already a user with the email entered',
      );

    let user = this.userFactoryService.createNewUser({
      ...createUserDto,
      password: await bcrypt.hash(password, 10),
    });
    return await this.dataServices.user.create(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    //Check if id exists in the database
    let user = await this.dataServices.user.get({ where: { id } });
    if (!user)
      throw new NotFoundException('No se entro el id solicitado para editar');

    //Update User
    user = this.userFactoryService.updateUser(updateUserDto);
    return await this.dataServices.user.update(id, user);
  }

  async delete(id: any) {
    //Check if user exists in the database
    const user = await this.dataServices.user.get({ where: { id } });
    if (!user)
      throw new NotFoundException('No se entro el id solicitado para eliminar');
    //Delete user
    return await this.dataServices.user.delete(id);
  }
}
