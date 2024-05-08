import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { ROUTES } from "../routes";

export const ProtectedWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isLogged } = useUserContext();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Sprawdzamy, czy użytkownik nie jest zalogowany, i przekierowujemy na stronę logowania
    if (!isLogged) {
      navigate(ROUTES.login);
    }
  }, [isLogged, navigate]);

  // Zwracamy dzieci tylko, jeśli użytkownik jest zalogowany
  return isLogged ? <>{children}</> : null;
};
