import { useRouter } from "next/router";
import nookies from "nookies";

export async function getServerSideProps(context) {
  const SENHA_SECRETA = "12345";
  const cookies = nookies.get(context);
  const senhaInformada = cookies.SENHA_SECRETA;
  const isAuth = SENHA_SECRETA === senhaInformada;

  if (!isAuth) {
    console.log("NAO AUTORIZADO");
    return {
      redirect: {
        permanent: false,
        destination: "/login?status=401",
      },
    };
  }

  return {
    props: {},
  };
}

export default function LoggedScreen(props) {
  const router = useRouter();
  return (
    <div
      style={{
        border: "1px solid #F9703E",
        flexDirection: "column",
        maxWidth: "400px",
        marginTop: "20%",
        marginHorizontal: "auto",
        padding: "32px",
        borderRadius: "4px",
        boxShadow: "1px 1px 5px 0 rgba(255,69,0,0.2)",
      }}
    >
      <p style={{ marginVertical: "32px" }}>Você acessou uma área protegida!</p>

      <button
        onClick={() => {
          nookies.destroy(null, "SENHA_SECRETA");
          router.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
