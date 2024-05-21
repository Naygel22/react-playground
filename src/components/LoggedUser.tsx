import { Avatar } from "@mui/material";
import { useUserContext } from "../contexts/UserContext";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link, useNavigate } from "react-router-dom";

export const LoggedUser = () => {
  const { isLogged, loggedUser, logOut } = useUserContext();
  const money = useSelector((state: RootState) => state.money.value)
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
