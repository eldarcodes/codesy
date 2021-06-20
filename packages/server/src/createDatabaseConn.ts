import { createConnection, getConnectionOptions } from "typeorm";
import { __prod__ } from "./constants";

export const createDatabaseConn = async () => {
  const connectionOptions = await getConnectionOptions(
    __prod__ ? "production" : "development"
  );

  let retries = 5;

  while (retries) {
    try {
      const conn = await createConnection({
        ...connectionOptions,
        name: "default",
      });
      return conn;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise((res) => setTimeout(res, 5000));
    }
  }

  return null;
};
