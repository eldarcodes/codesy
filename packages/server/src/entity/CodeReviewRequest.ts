import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class CodeRequest extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "int" })
  numDays: number;

  @Column({ type: "text" })
  codeUrl: string;

  @Column({ type: "text", array: true })
  techTags: string[];

  @Column({ type: "text" })
  notes: string;

  @Column()
  owner: string;

  @ManyToOne(() => User, (user) => user.codeReviewRequests)
  @JoinColumn({ name: "owner" })
  user: Promise<User>;
}
