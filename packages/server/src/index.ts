import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { createTypeormConnection } from "./createTypeormConnection";
import { UserResolver } from "./modules/user/UserResolver";
import * as passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";

require("dotenv-safe").config();

async function startApolloServer() {
  const app = Express();

  await createTypeormConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: "http://localhost:4000/oauth/github",
      },
      (accessToken: any, refreshToken: any, profile: any, done: any) => {
        console.log(profile, accessToken, refreshToken);
        done(null, {});
      }
    )
  );

  app.get("/auth/github", passport.authenticate("github", { session: false }));

  app.get(
    "/oauth/github",
    passport.authenticate("github"),
    function (req, res) {
      console.log(req.user);
      // Successful authentication, redirect home.
      res.redirect("http://localhost:3000/home");
    }
  );

  server.applyMiddleware({ app });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
