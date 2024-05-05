import { Dispatch, SetStateAction, createContext, useContext } from "react";

type UserContextProps = {
  isLogged: boolean,
  setIsLogged: Dispatch<SetStateAction<boolean>>,
  logIn: any // nie wiem jaki typ
  logOut: any // nie wiem jaki typ
  loggedUser: any
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)


export const useUserContext = () => {
  const ctx = useContext(UserContext)

  if (!ctx) {
    throw new Error("Missing UserContext, it's not wrapped in with Provider")
  }
  return ctx
}




