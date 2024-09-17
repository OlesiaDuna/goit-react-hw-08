import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <button onClick={handleLogout} className={css.link}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
