import { createConnection } from "typeorm";

export const createDatabaseConn = () => {
  return createConnection();
};
