import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { join } from "path";
import { mergeResolvers } from "@graphql-modules/epoxy";
import { loadResolversFiles } from "@graphql-modules/sonar";

const schema = loadSchemaSync(join(__dirname, "./**/*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});
const resolvers = mergeResolvers(loadResolversFiles(__dirname + "/modules/"));

export const createSchema = () =>
  addResolversToSchema({
    schema,
    resolvers,
  });
