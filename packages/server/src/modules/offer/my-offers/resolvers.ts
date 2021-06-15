import { getConnection } from "typeorm";
import { Resolvers } from "../../../generated/graphql";

const resolvers: Resolvers = {
  Query: {
    myOffers: (_, __, { req }) => {
      return getConnection().query(
        `
        select * from code_review cr
        inner join offer o
        on cr.id = o."codeReviewId"
        where o."userId" = $1;
      `,
        [req.session.userId]
      );
    },
  },
};

export default resolvers;
