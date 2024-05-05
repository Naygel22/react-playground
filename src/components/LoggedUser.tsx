import { Avatar } from "@mui/material";
import { useUserContext } from "../contexts/UserContext";

export const LoggedUser = () => {
  const { isLogged, loggedUser, logOut } = useUserContext();

  return (
    <>
      {isLogged ? (
        <>
          <Avatar sx={{ bgcolor: "deepOrange[500]" }}>N</Avatar>
          <div>{loggedUser?.username}</div>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        null
      )}
    </>
  );
};
