import nookies, { destroyCookie } from "nookies";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

export const tokenService = {
  save(accessToken, ctx = null) {
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      path: "/",
      maxAge: 60 * 60,
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY];
  },
  delete(ctx) {
    destroyCookie(ctx, ACCESS_TOKEN_KEY);
  },
};
