import { Resolvers } from "src/generated/graphql";
import * as argon2 from "argon2";
import { User } from "../../../entity/User";
import { registerSchema } from "@codesy/common";

const resolvers: Resolvers = {
  Mutation: {
    register: async (_, { input: { email, password, username } }) => {
      const hashedPassword = await argon2.hash(password);

      try {
        await User.create({
          email,
          username,
          password: hashedPassword,
        }).save();
      } catch (error) {
        const { detail } = error;

        const uniqueKeys = ["email", "username"];

        const errorFields = uniqueKeys.filter((key) => detail.includes(key));

        console.log(
          errorFields.map((errorField) => ({
            path: errorField,
            message: `"${errorField}" already in use`,
          }))
        );

        return {
          errors: errorFields.map((errorField) => ({
            message: `"${errorField}" already in use`,
            path: errorField,
          })),
        };
      }

      return {
        errors: [],
      };
    },
  },
};

export default resolvers;
