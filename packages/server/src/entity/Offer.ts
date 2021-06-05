import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { CodeReviewRequest } from "./CodeReviewRequest";

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  accepted: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @Column()
  codeReviewRequestId: string;

  @ManyToOne(
    () => CodeReviewRequest,
    (codeReviewRequest) => codeReviewRequest.offers
  )
  @JoinColumn({ name: "codeReviewRequestId" })
  codeReviewRequest: Promise<CodeReviewRequest>;
}
