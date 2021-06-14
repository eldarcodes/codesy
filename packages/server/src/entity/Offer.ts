import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm";
import { User } from "./User";
import { CodeReview } from "./CodeReview";

@Entity()
export class Offer extends BaseEntity {
  @Column({ type: "text", default: "inprogress" })
  status: string;

  @PrimaryColumn()
  userId: string;

  @PrimaryColumn()
  codeReviewId: string;

  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @ManyToOne(() => CodeReview, (codeReview) => codeReview.offers)
  @JoinColumn({ name: "codeReviewId" })
  codeReview: Promise<CodeReview>;
}
