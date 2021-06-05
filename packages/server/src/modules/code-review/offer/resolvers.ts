import { Offer } from "../../../entity/Offer";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createOffer: async (_, { input: { codeReviewId, userId } }) => {
      const offer = await Offer.create({ codeReviewId, userId }).save();

      return {
        ok: false,
      };
    },
  },
};

export default resolvers;
