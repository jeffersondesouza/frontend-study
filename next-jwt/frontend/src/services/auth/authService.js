import { HttpClient } from "../../infra/HttpClient";
import { tokenService } from "./tokenService";

async function login({ username, password }) {
  return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
    method: "POST",
    body: { username, password },
  })
    .then(({ ok, body }) => {
      if (!ok) {
        throw new Error("Usário ou senha inválido");
      }
      tokenService.save(body.data.access_token);
      return body;
    })
    .then(async ({ data }) => {
      const { refresh_token } = data;
      const res = await HttpClient("/api/refresh", {
        method: "POST",
        body: {
          refresh_token,
        },
      });
      console.log(res);
    });
}

async function getSession(ctx) {
  const token = tokenService.get(ctx);
  return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/session`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Não Autorizado");
    }
    return res;
  });
}

export default {
  login,
  getSession,
};
