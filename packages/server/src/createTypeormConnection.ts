import { createConnection, getConnectionOptions } from "typeorm";

import { __prod__ } from "./utils/constants";

export const createTypeormConnection = async () => {
  const connectionOptions = await getConnectionOptions(
    __prod__ ? "production" : "development"
  );

  let retries = 5;

  while (retries) {
    try {
      return __prod__
        ? createConnection({
            ...connectionOptions,
            url: process.env.DATABASE_URL,
            name: "default",
          } as any)
        : createConnection({
            ...connectionOptions,
            name: "default",
          });
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);

      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
};
