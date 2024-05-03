import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState();

  return (
    <UserContext.Provider value= {{ isLogged, setIsLogged }
}>
  { children }
  < /UserContext.Provider>
  )
}
