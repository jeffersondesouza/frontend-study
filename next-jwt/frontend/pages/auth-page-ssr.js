import { useRouter } from "next/router";
import nookies from "nookies";
import { tokenService } from "../src/services/auth/tokenService";
import authService from "../src/services/auth/authService";

export async function getServerSideProps(ctx) {
  console.log(ctx);
  const session = await authService.getSession(ctx);
  console.log({ session });

  return {
    props: {
      session,
    },
  };
}

export default function AuthPageSSR(props) {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Auth page Server Side Renderer</h1>
      <br />
      <div>
        <pre>{JSON.stringify(props.session, null, 2)}</pre>
      </div>
      <br />
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}
