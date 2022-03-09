import { createContext } from "react";
import { TypeUserContext } from "../types/types";

export const userContext = createContext<TypeUserContext>({
  user: {
    username: "",
    password: "",
    session: true,
  },
});
