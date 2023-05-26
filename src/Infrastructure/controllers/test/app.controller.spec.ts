import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app.controller';
import { AppUseCase } from '../../../Aplication/use-case/app.use-case';

describe('AppController', () => {
  let appController: AppController
  
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppUseCase]
    }).compile();
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Bff-Mysql adapter!"', () => {
      expect(appController.getHello()).toBe('Bff-Mysql adapter!');
    });
  });
});
