import { CodeReview } from "../../../entity/CodeReview";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createCodeReview: async (_, { input }, { req }) => {
      const { numDays } = input;

      const codeReview = (await CodeReview.create({
        ...input,
        numDays: numDays || undefined,
        ownerId: req.session.userId,
      }).save()) as any;

      return {
        errors: [],
        codeReview,
      };
    },
  },
};

export default resolvers;
