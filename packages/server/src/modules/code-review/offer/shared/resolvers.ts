import { User } from "../../../../entity/User";
import { CodeReview } from "../../../../entity/CodeReview";
import { Resolvers } from "../../../../generated/graphql";

const resolvers: Resolvers = {
  Offer: {
    sender: async ({ userId }) => {
      const user = await User.findOne(userId);
      return user as any;
    },
    codeReview: async ({ codeReviewId }) => {
      const codeReview = await CodeReview.findOne(codeReviewId);
      return codeReview as any;
    },
  },
};

export default resolvers;
