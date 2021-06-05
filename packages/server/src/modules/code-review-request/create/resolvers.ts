import { CodeReviewRequest } from "../../../entity/CodeReviewRequest";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createCodeReviewRequest: async (_, { input }, { req }) => {
      const { numDays } = input;

      const codeReviewRequest = (await CodeReviewRequest.create({
        ...input,
        numDays: numDays || undefined,
        ownerId: req.session.userId,
      }).save()) as any;

      return {
        errors: [],
        codeReviewRequest,
      };
    },
  },
};

export default resolvers;
