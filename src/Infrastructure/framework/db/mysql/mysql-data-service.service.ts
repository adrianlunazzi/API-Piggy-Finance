import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseDataServices } from "../../../../Domain/base/data-service.base";
import { Demo } from "../../../../Domain/entities";
import { Repository } from "typeorm";
import { MysqlGenericRepository } from "./mysql-generic-repository";

@Injectable()
export class MysqlDataServices
  implements BaseDataServices, OnApplicationBootstrap
  {
    demo: MysqlGenericRepository<Demo>;
  
    constructor(
    @InjectRepository(Demo)
    private DemoRepository: Repository<Demo>,
  ) {}

  onApplicationBootstrap() {
    this.demo = new MysqlGenericRepository<Demo>(this.DemoRepository);  
  }
}