import { User } from "../entity/User";

interface ICreateUser {
  username: string;
  githubId: string;
  pictureUrl: string;
  bio: string;
  name: string;
}

export const createUser = async ({
  username,
  githubId,
  pictureUrl,
  bio,
  name,
}: ICreateUser) => {
  let user: User | undefined;
  let times = 0;

  while (times < 100) {
    try {
      console.log("looping", times);
      user = await User.create({
        username: times ? `${username}${times}` : username,
        githubId,
        pictureUrl,
        bio,
        name,
      }).save();
      break;
    } catch (error) {
      if (!error.detail.includes("already exists")) {
        throw error;
      }
    }
    times += 1;
  }

  return user;
};
