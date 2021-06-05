import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { CodeReview } from "./CodeReview";
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

  @OneToMany(() => CodeReview, (codeReview) => codeReview.user)
  codeReviews: CodeReview[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];
}
