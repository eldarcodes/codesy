import { Offer } from "../../../entity/Offer";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    updateOfferStatus: async (
      _,
      { input: { codeReviewId, status, userId } }
    ) => {
      const offer = await Offer.findOne({
        where: { codeReviewId, userId },
      });

      if (!offer) {
        return { offer: null };
      }

      offer.status = status;

      await offer.save();

      return { offer: offer as any };
    },
  },
};

export default resolvers;
