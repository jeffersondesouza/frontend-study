import React from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import Nav from "../src/components/patterns/Nav";

export default function LoginScreen() {
  const [senha, setSenha] = React.useState("12345");
  const router = useRouter();
  console.log("LoginScreen", router);
  return (
    <div>
      <Nav />
      <div
        style={{
          border: "1px solid #F9703E",
          flexDirection: "column",
          maxWidth: { xs: "100%", sm: "400px" },
          marginTop: "20%",
          marginHorizontal: { xs: "16px", sm: "auto" },
          padding: "32px",
          borderRadius: "4px",
          boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (senha) {
              nookies.set(null, "SENHA_SECRETA", senha, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
              });
              router.push("/area-logada");
            } else {
              alert("Informe uma senha!");
            }
          }}
        >
          <div style={{ flexDirection: "column" }}>
            <label>Qual é a senha secreta?</label>
            <input
              placeholder="Qual é a senha secreta?"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">Acessar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
