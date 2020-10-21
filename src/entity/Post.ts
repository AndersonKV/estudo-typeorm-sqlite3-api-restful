import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";

//import User from "./User";

@Entity("posts_from_users")
export default class Post {
  @PrimaryGeneratedColumn("increment")
  id_post: number;

  @Column()
  id_user: number;

  @Column({ array: true })
  post_image: string;

  @Column()
  post_text: string;

  // @Column()
  // created_at: string;

  // @Column()
  // updated_at: string;
}
