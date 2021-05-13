import { Resolvers } from "src/generated/graphql";
import * as argon2 from "argon2";
import { User } from "../../../entity/User";
import { registerSchema } from "@codesy/common";
import { formatYupError } from "../../../utils/formatYupError";

const resolvers: Resolvers = {
  Mutation: {
    register: async (_, { input }) => {
      try {
        await registerSchema.validate(input, { abortEarly: false });
      } catch (error) {
        return {
          errors: formatYupError(error),
        };
      }

      const { email, password, username } = input || {};

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
