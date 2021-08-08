import { IncomingMessage } from "http";
import { NextPageContext } from "next";
import cookie from "cookie";

function parseCookies(
  req?: IncomingMessage,
  options = {}
): {
  [key: string]: string;
} {
  return cookie.parse(req?.headers.cookie || "", options);
}

export const getCookie = (ctx: NextPageContext, key: string) => {
  return parseCookies(ctx.req)[key];
};
