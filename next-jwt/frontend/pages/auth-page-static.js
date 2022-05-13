import { tokenService } from "../src/services/auth/tokenService";
import { withSessionHOC } from "../src/services/auth/session";
import { useDestroySession } from "../src/hooks/useSession";

function AuthPageStatic({ session }) {
  const logout = useDestroySession();
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <h1>Auth page Static</h1>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <div>
        <pre>{JSON.stringify({ session }, null, 2)}</pre>
      </div>
    </div>
  );
}

export default withSessionHOC(AuthPageStatic);
