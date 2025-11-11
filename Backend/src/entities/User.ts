import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id!: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  image: string;
}
