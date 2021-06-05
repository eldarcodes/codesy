import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { CodeReviewRequest } from "./CodeReviewRequest";
import { Offer } from "./Offer";

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

  @OneToMany(() => CodeReviewRequest, (codeRequest) => codeRequest.user)
  codeReviewRequests: CodeReviewRequest[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];
}
