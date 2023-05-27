import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseDataServices } from '../../../../Domain/base/data-service.base';
import { dataSourceOptions } from '../../../framework/config/db-config/data-source';
import { Demo, User } from '../models';
import { MysqlDataServices } from './mysql-data-service.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Demo, User]),
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  providers: [
    {
      provide: BaseDataServices,
      useClass: MysqlDataServices,
    },
  ],
  exports: [BaseDataServices],
})
export class MysqlDataServicesModule {}
