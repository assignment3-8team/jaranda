import "./style.css";
import { UserContainer } from "container/User/UserContainer";

const MenuList = props => {
  const { userInfo, setUserInfo } = UserContainer.useContainer();
  console.log(userInfo.allowed_menu);
  return (
    <div className="menu-list">
      {userInfo.allowed_menu.map(item => (
        <ul>{item.checked && <li>{item.name}</li>}</ul>
      ))}
    </div>
  );
};

export default MenuList;
