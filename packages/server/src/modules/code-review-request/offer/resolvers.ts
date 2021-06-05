import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    createOffer: async () => {
      return {
        ok: false,
      };
    },
  },
};

export default resolvers;
