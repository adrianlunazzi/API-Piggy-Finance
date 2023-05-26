import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateDemoDto {
    
    @ApiProperty() 
    @IsString()
    @IsNotEmpty({message: "El nombre no puede estar vacio"})
    nombre: string;

    @ApiProperty()
    @IsNumber()
    edad: number;     
    
    @ApiProperty()
    @IsBoolean()
    estado: boolean;
}
export class UpdateDemoDto extends PartialType(CreateDemoDto) {}