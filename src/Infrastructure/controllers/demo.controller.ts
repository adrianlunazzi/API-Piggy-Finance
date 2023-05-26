import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateDemoDto, UpdateDemoDto } from "../../Aplication/dto";
import { DemoUseCases } from "../../Aplication/use-case/demo/demo.use-case";

@ApiTags('Demo')
@Controller('demo')
export class DemoController {
  constructor(private demoUseCases: DemoUseCases) { }

  @Get()
  async getAll() {
    return this.demoUseCases.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.demoUseCases.getById(id);
  }

  @Post()
  create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoUseCases.create(createDemoDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoUseCases.update(id, updateDemoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.demoUseCases.delete(id);
  }
}