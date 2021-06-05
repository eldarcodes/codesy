import { IMiddlewareFunction, IMiddlewareTypeMap } from "graphql-middleware";

const isAuth = (req: any) => {
  if (!req || !req.session || !req.session.userId) {
    throw new Error("not authenticated");
  }
};

const standartMiddleWare: IMiddlewareFunction = async (
  resolve,
  parent,
  args,
  context,
  info
) => {
  isAuth(context.req);
  return resolve(parent, args, context, info);
};

export const middleware: IMiddlewareTypeMap = {
  Mutation: {
    createCodeReview: standartMiddleWare,
  },
};
