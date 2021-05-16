import { LoginResponse, Resolvers } from "src/generated/graphql";
import * as argon2 from "argon2";
import { User } from "../../../entity/User";
import { registerSchema } from "@codesy/common";
import { formatYupError } from "../../../utils/formatYupError";
import { getConnection } from "typeorm";

const invalidLoginResponse: LoginResponse = {
  errors: [
    {
      path: "password",
      message: "invalid login",
    },
  ],
  user: null,
};

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { input }, { req }) => {
      const user = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .where("user.email = :email", { email: input.usernameOrEmail })
        .orWhere("user.username = :username", {
          username: input.usernameOrEmail,
        })
        .getOne();

      if (!user) {
        return invalidLoginResponse;
      }

      const valid = await argon2.verify(user.password, input.password);

      if (!valid) {
        return invalidLoginResponse;
      }

      (req.session as any).userId = user.id;

      return {
        errors: [],
        user,
      };
    },
  },
};

export default resolvers;
