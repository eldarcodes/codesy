import { createConnection, getConnectionOptions } from "typeorm";
import { __prod__ } from "./constants";

export const createDatabaseConn = async () => {
  const connectionOptions = await getConnectionOptions(
    __prod__ ? "production" : "development"
  );
  console.log();

  return createConnection({ ...connectionOptions, name: "default" });
};
