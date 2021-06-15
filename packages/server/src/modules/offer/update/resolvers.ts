import { getConnection, getRepository } from "typeorm";
import { Offer } from "../../../entity/Offer";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    updateOfferStatus: async (
      _,
      { input: { codeReviewId, status, userId } }
    ) => {
      const { raw } = await getConnection()
        .createQueryBuilder()
        .update(Offer)
        .set({ status })
        .where('"userId" = :userId', { userId })
        .andWhere('"codeReviewId" = :codeReviewId', { codeReviewId })
        .returning("*")
        .execute();

      return { offer: raw[0] };
    },
  },
};

export default resolvers;
