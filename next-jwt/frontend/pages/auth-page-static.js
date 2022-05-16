import { withSessionHOC } from "../src/services/auth/session";

function AuthPageStatic({ session }) {
  return (
    <div>
      <h1>Auth page Static</h1>
      <div>
        <pre>{JSON.stringify({ session }, null, 2)}</pre>
      </div>

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

export default withSessionHOC(AuthPageStatic);
