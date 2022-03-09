import { userContext } from "./userContext";
import { useContext, useEffect, useState } from "react";

export const userCheckSession = () => {
  const { user } = useContext(userContext);
  const [navigate, setNavigate] = useState("");
  const [session, setSession] = useState(true);
  useEffect(() => {
    if (user.session === false) {
      setSession(false);
      setNavigate("/login");
    }
  }, [user, session]);
  return { session, navigate };
};
