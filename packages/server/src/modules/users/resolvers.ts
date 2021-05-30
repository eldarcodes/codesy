import { User } from "../../entity/User";

export default {
  Query: {
    users: () => {
      return User.find();
    },
  },
};
