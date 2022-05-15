import { useEffect, useState } from "react";
import authService from "../services/auth/authService";
import { useRouter } from "next/router";
import { tokenService } from "../services/auth/tokenService";

export default function useSession() {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService
      .getSession(null)
      .then((session) => {
        setSession(session);
      })
      .catch((err) => {
        console.warn(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: session,
    loading,
    error,
  };
}



export function useDestroySession() {
  const router = useRouter();

  return async () => {
    console.log('useDestroySession')
    tokenService.delete(null);
    router.push("/");
  };
}
