import "reflect-metadata";
import * as Express from "express";
import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "hi",
  },
};

async function startApolloServer() {
  const app = Express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
