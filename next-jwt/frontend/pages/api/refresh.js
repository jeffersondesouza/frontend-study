import nookies, { destroyCookie } from "nookies";
import { HttpClient } from "../../src/infra/HttpClient";

// essa lógica deveria ser implementada no backend

const REFRESH_TOKEN_NAME = "REFRESH_TOKEN_NAME";

const controllers = {
  async storeRefreshToken(req, res) {
    const ctx = { req, res };
    nookies.set(ctx, REFRESH_TOKEN_NAME, req.body.refresh_token, {
      httpOnly: true,
      sameSite: "lax",
    });

    res.json({
      data: {
        message: "Storage with success!",
      },
    });
  },
  async regenerateTokens(req, res) {
    const ctx = { req, res };
    const cookies = nookies.get(ctx);
    const refreshCookie = cookies[REFRESH_TOKEN_NAME];

    const refreshResponse = await HttpClient(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/refresh`,
      {
        method: "POST",
        body: {
          refresh_token: refreshCookie,
        },
      }
    );

    if (refreshResponse.ok) {
      nookies.set(
        ctx,
        REFRESH_TOKEN_NAME,
        refreshResponse.body.data.refresh_token,
        {
          httpOnly: true,
          sameSite: "lax",
        }
      );

      nookies.set(
        ctx,
        "ACCESS_TOKEN_KEY",
        refreshResponse.body.data.access_token,
        {
          path: "/",
          maxAge: 60 * 60,
        }
      );

      res.json({
        refreshResponse,
      });
    } else {
      res.status(401).json({
        message: "Não Autorizado",
      });
    }
  },
  async displayTokens(req, res) {
    const ctx = { req, res };
    res.json({
      data: {
        message:
          "Apenas para fim de estudo. Refresh token nao deve ser exposto!",
        cookies: nookies.get(ctx),
      },
    });
  },
};

const controllerBy = {
  POST: controllers.storeRefreshToken,
  GET: controllers.regenerateTokens,
};

export default function handler(req, res) {
  if (controllerBy[req.method]) {
    return controllerBy[req.method](req, res);
  }

  res.status(404).json({
    message: "Note Found",
  });
}
