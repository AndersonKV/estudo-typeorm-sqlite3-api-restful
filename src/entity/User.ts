import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("increment")
  id_user: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: "0" })
  following: string;

  @Column({ default: "0" })
  followers: string;
}
