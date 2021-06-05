import { CodeReviewRequestResolvers } from "../../../generated/graphql";
import { User } from "./../../../entity/User";

export const resolvers: CodeReviewRequestResolvers = {
  owner: async ({ ownerId }) => {
    const user = await User.findOne(ownerId);

    if (user) {
      return user;
    }

    return {
      email: "deleted",
      username: "deleted",
      id: "deleted",
    };
  },
};

export default {
  CodeReviewRequest: {
    ...resolvers,
  },
};
