import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Offer } from "./Offer";

@Entity()
export class CodeReview extends BaseEntity {
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
  ownerId: string;

  @ManyToOne(() => User, (user) => user.codeReviews)
  @JoinColumn({ name: "ownerId" })
  user: Promise<User>;

  @OneToMany(() => Offer, (offer) => offer.codeReview)
  offers: Offer[];
}
