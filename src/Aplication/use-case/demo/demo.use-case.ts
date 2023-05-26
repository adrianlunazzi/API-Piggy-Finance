import { Injectable, NotFoundException } from "@nestjs/common";
import { BaseDataServices } from "../../../Domain/base/data-service.base";
import { CreateDemoDto, UpdateDemoDto } from "../../dto";
import { Demo } from "../../../Domain/entities";
import { DemoFactoryService } from "./demo-factory.service";

@Injectable()
export class DemoUseCases {
  constructor(
    private dataServices: BaseDataServices,
    private demoFactoryService: DemoFactoryService,
  ) { }

  async getAll(): Promise<Demo[]> {
    return await this.dataServices.demo.getAll();
  }

  async getById(id: any) {
    let demo: Demo;
    //Find by Id
    if (!demo) {
      demo = await this.dataServices.demo.get({ where: { id } });
    }
    if (!demo) throw new NotFoundException("No se encontro el id solicitado");
    return demo;
  }

  async create(createDemoDto: CreateDemoDto) {
    let demo = this.demoFactoryService.createNewDemo(createDemoDto);
    return await this.dataServices.demo.create(demo);
  }

  async update(id: string, updateDemoDto: UpdateDemoDto) {
    //Check if id exists in the database
    let demo = await this.dataServices.demo.get({ where: { id } })
    if (!demo) throw new NotFoundException("No se entro el id solicitado para editar");

    //Update Demo
    demo = this.demoFactoryService.updateDemo(updateDemoDto);
    return await this.dataServices.demo.update(id, demo);
  }

  async delete(id: any) {
    //Check if demo exists in the database
    const demo = await this.dataServices.demo.get({ where: { id } })
    if (!demo) throw new NotFoundException("No se entro el id solicitado para eliminar");
    //Delete demo
    return await this.dataServices.demo.delete(id)
  }

}
