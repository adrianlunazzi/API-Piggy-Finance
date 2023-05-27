import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // @ts-ignore
  @PrimaryGeneratedColumn('uuid', { length: 36 })
  id: string;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  //   @Column()
  //   operation: string

  //   @Column()
  //   category: string;
}
