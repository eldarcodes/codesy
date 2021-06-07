import { User } from "../../../entity/User";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Mutation: {
    logout: async (_, __, { req, res }) => {
      await new Promise<void>((resolve, reject) =>
        req.session.destroy((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        })
      );
      res.clearCookie("qid");

      return true;
    },
  },
};

export default resolvers;
