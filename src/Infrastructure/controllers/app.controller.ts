import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { AppUseCase } from '../../Aplication/use-case/app.use-case';


@ApiTags('Main')
@Controller()
export class AppController {
  constructor(private readonly appUseCase: AppUseCase) {}

  @Get()
  getHello(): string {
    return this.appUseCase.getHello();
  }
}
