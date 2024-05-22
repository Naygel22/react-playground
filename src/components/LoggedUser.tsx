import { Avatar } from "@mui/material";
import { useUserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../state/store";

export const LoggedUser = () => {
  const { isLogged, loggedUser, logOut } = useUserContext();
  const money = useAppSelector((state) => state.money.value)
  const navigate = useNavigate()

  const handleMoneyClick = () => {
    navigate('/money');
  };

  return (
    <>
      {isLogged ? (
        <div className="loggedUser">
          <Avatar sx={{ bgcolor: "orange" }}>{loggedUser?.username.at(0)}</Avatar>
          <div className="loggedUsername">{loggedUser?.username}</div>
          <Link to='/money'>
            <div className="userMoney" onClick={handleMoneyClick}>Money: {money} $</div>
          </Link>

          <button className="logoutButton" onClick={logOut}>Log out</button>
        </div>
      ) : (
        null
      )}
    </>
  );
};
