import { withSession } from "../src/services/auth/session";

export const getServerSideProps = withSession((ctx) => {
  return {
    props: {
      session: ctx.req.session,
    },
  };
});

export default function AuthPageSSR(props) {
  return (
    <div>
      <h1>Auth page Server Side Renderer</h1>
      <br />
      <div>
        <pre>{JSON.stringify(props.session, null, 2)}</pre>
      </div>
      <br />
      <div>
        <div>
          <a href="/auth-page-ssr">auth-page-ssr</a>
        </div>
        <div>
          <a href="/auth-page-static">auth-page-static</a>
        </div>
        <div>
          <a href="/logout">logout</a>
        </div>
      </div>
    </div>
  );
}
