import { useState } from "react";
import { UserContext } from "./UserContext";
import { QUERY_KEYS } from "../api/constants";
import { getAllRegisters } from "../api/getAllRegisters";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

type UserLogin = {
  username: string,
  password: string
}



export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState<any>(null); //typ
  const navigate = useNavigate()
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.orders.getAll],
    queryFn: getAllRegisters
  })
  if (!data) {
    return <p>No data...</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error</p>
  }

  function logIn(username: string, password: string) {
    const usernameExists = data?.some((register) => {
      return register.username === username;
    });

    if (usernameExists) {
      const passwordExists = data?.some((register) => {
        return register.password === password;
      });
      if (passwordExists) {
        setIsLogged(true);
        setLoggedUser(usernameExists)
        console.log("Login success!");
        navigate(ROUTES.home)
      }
    } else {
      console.log("Login failed. User not found or invalid credentials.");
    }
  }

  function logOut() {
    setIsLogged(false)
    setLoggedUser(null)
    navigate(ROUTES.login);
  }

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, logIn, logOut, loggedUser }
    }>
      {children}
    </UserContext.Provider>
  )
}
