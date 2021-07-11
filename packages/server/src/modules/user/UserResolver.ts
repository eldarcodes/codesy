import { Resolver, Query } from "type-graphql";

import { User } from "../../entity/User";

@Resolver(User)
export class UserResolver {
  @Query(returns => User, { nullable: true })
  async me() {
    return null;
  }
}
