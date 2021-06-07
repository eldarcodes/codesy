import { User } from "../../../entity/User";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    me: async (_, __, { req }) => {
      const userId = req.session.userId;

      if (!userId) {
        return null;
      }

      const user = await User.findOne(userId);

      if (user) {
        return user;
      }

      return null;
    },
  },
};

export default resolvers;
