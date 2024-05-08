import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { useState } from "react";
import { User, getAllRegisters } from "../api/getAllRegisters";

type UserContextProps = {
  isLogged: boolean,
  setIsLogged: Dispatch<SetStateAction<boolean>>,
  logIn: (username: string, password: string) => Promise<boolean>
  logOut: () => void;
  loggedUser: User | null
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

export async function getUserByUsername(username: string) {
  const data = await getAllRegisters({ username })
  const usernameExists = data.find((register) => {
    return register.username === username;
  });
  return usernameExists;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);



  async function logIn(username: string, password: string) {
    const usernameExists = await getUserByUsername(username);

    if (usernameExists && usernameExists.password === password) {
      setIsLogged(true);
      setLoggedUser(usernameExists)
      console.log("Login success!");
      return true;
    }
    return false;
    // console.log("Login failed. User not found or invalid credentials.");

  }

  function logOut() {
    setIsLogged(false)
    setLoggedUser(null)
  }

  return (
    <UserContext.Provider value={{ isLogged, setIsLogged, logIn, logOut, loggedUser }
    }>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const ctx = useContext(UserContext)

  if (!ctx) {
    throw new Error("Missing UserContext, it's not wrapped in with Provider")
  }
  return ctx
}




