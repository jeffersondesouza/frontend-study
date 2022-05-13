import nookies from "nookies";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN_KEY";

export const tokenService = {
  save(accessToken, refreshToken, ctx = null) {
    globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
    globalThis?.sessionStorage?.setItem(REFRESH_TOKEN_KEY, refreshToken);
    nookies.set(ctx, ACCESS_TOKEN_KEY, accessToken, {
      path: "/",
      maxAge: 60 * 60,
    });
    nookies.set(ctx, REFRESH_TOKEN_KEY, refreshToken, {
      path: "/",
      maxAge: 60 * 60,
    });
  },
  get(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[ACCESS_TOKEN_KEY];
  },
  getRefresh(ctx = null) {
    const cookies = nookies.get(ctx);
    return cookies[REFRESH_TOKEN_KEY];
  },
  delete(ctx) {
    nookies.destroy(ctx);
    globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
    globalThis?.sessionStorage?.removeItem(REFRESH_TOKEN_KEY);
  },
};
