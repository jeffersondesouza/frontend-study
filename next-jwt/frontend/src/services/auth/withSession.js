import authService from "./authService";

export default function withSession(fn) {
  return async (ctx) => {
    try {
      const session = await authService.getSession(ctx);
      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session,
        },
      };

      return fn(modifiedCtx);
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/?error=unauthorized401",
        },
      };
    }
  };
}
