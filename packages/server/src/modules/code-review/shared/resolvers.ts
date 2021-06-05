import { CodeReviewResolvers } from "../../../generated/graphql";
import { User } from "./../../../entity/User";

export const resolvers: CodeReviewResolvers = {
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
  CodeReview: {
    ...resolvers,
  },
};
