import "reflect-metadata";
import * as Express from "express";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import { ApolloServer } from "apollo-server-express";
import { createDatabaseConn } from "./createDatabaseConn";
import { createSchema } from "./createSchema";
import { redis } from "./redis";

// @TODO: env variable for this
const SESSION_SECRET = "%$flsdfjsd7fsdf778SDF";
const RedisStore = connectRedis(session); // connect node.req.session to redis backing store

async function startApolloServer() {
  const app = Express();

  await createDatabaseConn();

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: SESSION_SECRET || "",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );

  const server = new ApolloServer({
    schema: createSchema(),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });

  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "http://localhost:3000",
    },
  });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
