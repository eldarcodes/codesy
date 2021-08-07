import "reflect-metadata";
import * as Express from "express";
import * as session from "express-session";
import * as connectRedis from "connect-redis";
import * as passport from "passport";
import * as cors from "cors";
import { RedisClient } from "redis";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { Strategy as GitHubStrategy } from "passport-github";

import { createTypeormConnection } from "./createTypeormConnection";
import { UserResolver } from "./modules/user/UserResolver";
import { User } from "./entity/User";
import { redis } from "./redis";
import { MyContext } from "./types/MyContext";

require("dotenv-safe").config();

const SESSION_SECRET = process.env.SESSION_SECRET;
const RedisStore = connectRedis(session);

async function startApolloServer() {
  const app = Express();

  await createTypeormConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: MyContext) => ({ req, res }),
  });

  app.set("trust proxy", 1);

  app.use(
    cors({
      credentials: true,
      origin: process.env.CORS_ORIGIN,
    })
  );

  const sessionOption: session.SessionOptions = {
    store: new RedisStore({
      client: (redis as unknown) as RedisClient,
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
  };

  app.use(session(sessionOption));

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: "http://localhost:4000/oauth/github",
      },
      async (accessToken, refreshToken, profile: any, done) => {
        let user = await User.findOne({
          where: {
            githubId: profile.id,
          },
        });
        if (user) {
        } else {
          user = await User.create({
            githubId: profile.id,
            pictureUrl: profile._json.avatar_url,
            bio: profile._json.bio,
          }).save();
        }

        done(null, {
          user,
          accessToken,
          refreshToken,
        });
      }
    )
  );

  app.use(passport.initialize());

  app.get("/auth/github", passport.authenticate("github", { session: false }));

  app.get(
    "/oauth/github",
    passport.authenticate("github", { session: false }),
    (req: any, res) => {
      req.session.userId = req.user.user.id;
      req.session.accessToken = req.user.accessToken;
      req.session.refreshToken = req.user.refreshToken;

      res.redirect("http://localhost:3000/home");
    }
  );

  server.applyMiddleware({ app, cors: false });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer();
