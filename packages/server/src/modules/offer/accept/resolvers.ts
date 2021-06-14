import { CodeReview } from "../../../entity/CodeReview";
import { Offer } from "../../../entity/Offer";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    acceptOffer: async (_, { input: { userId, codeReviewId } }) => {
      const offer = await Offer.findOne({
        where: { codeReviewId, userId },
      });
      if (!offer) {
        return {
          offer: null,
        };
      }

      offer.accepted = true;

      await offer.save();

      return {
        offer: offer as any,
      };
    },
  },
};

export default resolvers;
