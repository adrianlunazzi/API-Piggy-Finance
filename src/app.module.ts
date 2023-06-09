import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppUseCase } from './Aplication/use-case/app.use-case';
import { AppController, DemoController, LivenessController, ReadinessController } from './Infrastructure/controllers';
import { DemoUseCasesModule } from './Aplication/use-case/demo/demo.use-case.module';
import { CommonModule } from './Infrastructure/common/common.module';

const ENV = process.env.NODE_ENV;
export const ENV_FILE_PATH = ENV === undefined ? '.env.develop' : `.env.${ENV}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV_FILE_PATH
    }), 
    TerminusModule, 
    HttpModule, 
    DemoUseCasesModule, 
    CommonModule
  ],
  controllers: [
    AppController, 
    ReadinessController,
    LivenessController, 
    DemoController
  ],
  providers: [AppUseCase],
})
export class AppModule { }
