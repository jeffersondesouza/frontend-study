import React from "react";
import { useRouter } from "next/router";

export default function HomeScreen() {
  const router = useRouter();

  const [values, setValues] = React.useState({
    usuario: "joao",
    senha: "123",
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    router.push("/auth-page-ssr");
    // router.push("/auth-page-static");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuário"
          name="usuario"
          defaultValue="joao"
          onChange={handleChange}
        />
        <input
          placeholder="Senha"
          name="senha"
          type="password"
          defaultValue="123"
          onChange={handleChange}
        />
        <div>
          <button>Entrar</button>
        </div>
      </form>
    </div>
  );
}
