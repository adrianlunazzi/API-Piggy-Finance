import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseDataServices } from '../../../../Domain/base/data-service.base';
import { Demo, User } from '../../../../Domain/entities';
import { Repository } from 'typeorm';
import { MysqlGenericRepository } from './mysql-generic-repository';

@Injectable()
export class MysqlDataServices
  implements BaseDataServices, OnApplicationBootstrap
{
  demo: MysqlGenericRepository<Demo>;
  user: MysqlGenericRepository<User>;

  constructor(
    @InjectRepository(Demo)
    private DemoRepository: Repository<Demo>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  onApplicationBootstrap() {
    this.demo = new MysqlGenericRepository<Demo>(this.DemoRepository);
    this.user = new MysqlGenericRepository<User>(this.UserRepository);
  }
}
