import { CodeReviewRequest } from "../../../entity/CodeReviewRequest";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createCodeReviewRequest: async (_, { input }, { req }) => {
      const { numDays } = input;

      const codeReviewRequest = await CodeReviewRequest.create({
        ...input,
        numDays: numDays || undefined,
        owner: (req.session as any).userId,
      }).save();

      return {
        errors: [],
        codeReviewRequest,
      };
    },
  },
};

export default resolvers;
