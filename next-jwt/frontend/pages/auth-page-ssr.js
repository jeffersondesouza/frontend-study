import { useRouter } from "next/router";
import { withSession } from "../src/services/auth/session";

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

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


