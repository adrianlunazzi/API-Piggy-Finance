import { Module } from "@nestjs/common";
import { DbModule } from "../../../Infrastructure/framework/db/db.module";
import { DemoFactoryService } from "./demo-factory.service";
import { DemoUseCases } from "./demo.use-case";

@Module({
    imports: [DbModule],
    providers: [DemoFactoryService, DemoUseCases],
    exports: [DemoFactoryService, DemoUseCases],
  })
  export class DemoUseCasesModule {}