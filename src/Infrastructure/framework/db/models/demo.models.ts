import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "demo" })
export class Demo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;

    @Column()
    edad: number;

    @Column()
    estado: boolean;
}