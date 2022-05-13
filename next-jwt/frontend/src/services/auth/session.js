import { useRouter } from "next/router";
import authService from "./authService";
import useSession from "../../hooks/useSession";

export function withSession(fn) {
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

export function withSessionHOC(Component) {
  return function Wrapper(props) {
    const router = useRouter();
    const session = useSession();

    if (!session.loading && session.error) {
      router.push("/?error=unauthorized");
    }

    if (session.loading) {
      return <div>Loading...</div>;
    }

    const modifiedProps = {
      ...props,
      session,
    };

    return <Component {...modifiedProps} />;
  };
}
