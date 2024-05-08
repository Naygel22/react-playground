import { Avatar } from "@mui/material";
import { useUserContext } from "../contexts/UserContext";

export const LoggedUser = () => {
  const { isLogged, loggedUser, logOut } = useUserContext();

  return (
    <>
      {isLogged ? (
        <div className="loggedUser">
          <Avatar sx={{ bgcolor: "orange" }}>{loggedUser?.username.at(0)}</Avatar>
          <div className="loggedUsername">{loggedUser?.username}</div>
          <button className="logoutButton" onClick={logOut}>Log out</button>
        </div>
      ) : (
        null
      )}
    </>
  );
};
