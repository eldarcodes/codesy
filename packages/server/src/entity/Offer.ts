import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { CodeReview } from "./CodeReview";

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "bool", default: false })
  accepted: boolean;

  @Column()
  userId: string;

  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn({ name: "userId" })
  user: Promise<User>;

  @Column()
  codeReviewId: string;

  @ManyToOne(() => CodeReview, (codeReview) => codeReview.offers)
  @JoinColumn({ name: "codeReviewId" })
  codeReview: Promise<CodeReview>;
}
