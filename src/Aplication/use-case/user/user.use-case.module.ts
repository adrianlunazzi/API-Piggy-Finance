import { Module } from '@nestjs/common';
import { DbModule } from 'src/Infrastructure/framework/db/db.module';
import { UserFactoryService } from './user-factory.service';
import { UserUseCases } from './user.use-case';

@Module({
  imports: [DbModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}
