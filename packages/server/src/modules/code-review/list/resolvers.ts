import { CodeReview } from "../../../entity/CodeReview";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    listCodeReviews: () => {
      return CodeReview.find() as any;
    },
  },
};

export default resolvers;
