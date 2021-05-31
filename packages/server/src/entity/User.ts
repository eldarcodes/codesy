import { CodeReviewRequest } from "src/generated/graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { CodeRequest } from "./CodeReviewRequest";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", unique: true })
  username: string;

  @Column({ type: "text", unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => CodeRequest, (codeRequest) => codeRequest.user)
  codeReviewRequests: CodeReviewRequest[];
}
