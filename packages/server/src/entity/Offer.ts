import {
  Entity,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  CreateDateColumn,
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

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => CodeReview, (codeReview) => codeReview.offers)
  @JoinColumn({ name: "codeReviewId" })
  codeReview: Promise<CodeReview>;
}
