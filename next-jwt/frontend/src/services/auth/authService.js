import { HttpClient } from "../../infra/HttpClient";
import { tokenService } from "./tokenService";

export async function authLogin({ username, password }) {
  return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: { username, password },
  }).then(({ ok, body }) => {
    if (!ok) {
      throw new Error("Usário ou senha inválido");
    }
    tokenService.save(body.data.access_token, body.data.refresh_token);
    return body.data;
  });
}
