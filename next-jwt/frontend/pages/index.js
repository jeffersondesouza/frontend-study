import React from "react";
import { useRouter } from "next/router";
import authService from "../src/services/auth/authService";
import Game from "../src/components/Game";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = React.useState({
    usuario: "omariosouto",
    senha: "safepassword",
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await authService.login({
        username: values.usuario,
        password: values.senha,
      });
      // router.push("/auth-page-ssr");
      router.push("/auth-page-static");
    } catch (error) {
      console.warn(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          name="usuario"
          defaultValue={values.usuario}
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          defaultValue={values.senha}
          onChange={handleChange}
        />
        <div>
          <button>Entrar SSR</button>
        </div>
      </form>
      <div>
        <br />
        <Game />
        <br />
      </div>
      <div>
        <div>
          <a href="/auth-page-ssr">auth-page-ssr</a>
        </div>
        <div>
          <a href="/auth-page-static">auth-page-static</a>
        </div>
      </div>
    </div>
  );
}
