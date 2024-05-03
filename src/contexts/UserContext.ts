import { Dispatch, SetStateAction, createContext, useContext } from "react";

type UserContextProps = {
  isLogged: boolean,
  setIsLogged: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

//nie mogłem zrobić komponentu UserProvider z children wiec dalem bezposrednio do App

export const useUserContext = () => {
  const ctx = useContext(UserContext)

  if (!ctx) { // poza komponentem dziecka providera zwróci nulla
    throw new Error("Missing UserContext, it's not wrapped in with Provider")
  }
  return ctx
}