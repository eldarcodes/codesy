import { getConnection, getRepository } from "typeorm";
import { Offer } from "../../../entity/Offer";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    updateOfferStatus: async (
      _,
      { input: { codeReviewId, status, userId } }
    ) => {
      const result = await getConnection()
        .createQueryBuilder()
        .update(Offer)
        .set({ status })
        .where('"userId"= :userId and "codeReviewId"= :codeReviewId', {
          userId,
          codeReviewId,
        })
        .returning("*")
        .execute();

      return result.raw[0];
    },
  },
};

export default resolvers;
