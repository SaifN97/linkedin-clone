import "./Header.scss";
import HeaderOption from "./HeaderOption";
import {
  BusinessCenter,
  Chat,
  ExitToApp,
  Home,
  Notifications,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1644915416~hmac=5378589fea14a9bf9912a2e3e090245c"
          alt="logo"
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messages" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption user={user} title="Me" />
        <HeaderOption Icon={ExitToApp} title="Logout" onClick={logoutOfApp} />
      </div>
    </div>
  );
};

export default Header;
