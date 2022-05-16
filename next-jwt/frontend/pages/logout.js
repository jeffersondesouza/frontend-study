import { useEffect } from "react";
import { tokenService } from "../src/services/auth/tokenService";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    tokenService.delete(null);
    router.push("/");
  }, []);

  return (
    <div>
      <p>Logout success</p>
    </div>
  );
}
