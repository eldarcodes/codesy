import { CodeReviewRequest } from "../../../entity/CodeReviewRequest";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    listCodeReviewRequests: () => {
      return CodeReviewRequest.find();
    },
  },
};

export default resolvers;
