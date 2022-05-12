import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService";

export default function AuthPageStatic(props) {
  const router = useRouter();

  const handleLogout = () => {
    tokenService.delete();
    router.push("/");
  };

  return (
    <div>
      <h1>Auth page Static</h1>
      <div>
        <button onClick={handleLogout}>logout</button>
      </div>
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  );
}
