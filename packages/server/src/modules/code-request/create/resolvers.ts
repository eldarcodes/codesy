import { CodeRequest } from "../../../entity/CodeReviewRequest";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createCodeReviewRequest: async (_, { input }, { req }) => {
      const { numDays } = input;

      const codeReviewRequest = await CodeRequest.create({
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
