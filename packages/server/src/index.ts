import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import { createDatabaseConn } from "./createDatabaseConn";
import { createSchema } from "./createSchema";

async function startApolloServer() {
  const app = Express();

  await createDatabaseConn();

  const server = new ApolloServer({
    schema: createSchema(),
  });

  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
