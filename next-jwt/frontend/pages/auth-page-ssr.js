import { useRouter } from "next/router";
import nookies from "nookies";
import { tokenService } from "../src/services/auth/tokenService";

export async function getServerSideProps(ctx) {
  console.log("AuthPageSSR:: ", tokenService.get());
  nookies.get();
  const accessToken = tokenService.get(ctx);
  const refreshToken = tokenService.getRefresh(ctx);
  return {
    props: {
      accessToken,
      refreshToken,
    },
  };
}

export default function AuthPageSSR(props) {
  const router = useRouter();

  const handleLogout = () => {
    tokenService.delete();
    router.push("/");
  };

  return (
    <div>
      <h1>Auth page Server Side Renderer</h1>
      <br />
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
      <br />
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
}
