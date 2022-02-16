import { Avatar } from "@material-ui/core";
import "./HeaderOption.scss";

const HeaderOption = ({ user, Icon, title, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {user && (
        <Avatar className="headerOption__icon" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
