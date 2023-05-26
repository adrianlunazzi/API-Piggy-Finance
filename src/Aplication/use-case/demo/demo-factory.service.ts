import { Injectable } from "@nestjs/common";
import { CreateDemoDto, UpdateDemoDto } from "../../dto";
import { Demo } from "../../../Domain/entities";

@Injectable()
export class DemoFactoryService {

createNewDemo(createDemoDto: CreateDemoDto) {
    const newDemo = new Demo();
    newDemo.nombre = createDemoDto.nombre;
    newDemo.edad = createDemoDto.edad;
    newDemo.estado = createDemoDto.estado;
    return newDemo;
  }

updateDemo(updateDemoDto: UpdateDemoDto) {
    const newDemo = new Demo();
    newDemo.nombre = updateDemoDto.nombre;
    newDemo.edad = updateDemoDto.edad;
    newDemo.estado = updateDemoDto.estado;
    return newDemo;
  }
}