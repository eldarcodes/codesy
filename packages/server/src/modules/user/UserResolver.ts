import { MyContext } from "src/types/MyContext";
import { Resolver, Query, Ctx } from "type-graphql";

import { User } from "../../entity/User";

@Resolver(User)
export class UserResolver {
  @Query(returns => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    const userId = req.session.userId;

    if (userId) {
      return User.findOne(userId);
    }

    return null;
  }
}
