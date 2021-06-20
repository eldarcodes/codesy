import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = (ctx: any) => {
  return new ApolloClient({
    uri:
      process.env.NODE_ENV === "production"
        ? "https://api.codesy.mirzabekov.space/graphql"
        : "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache(),
  });
};

export default withApollo(apolloClient);
