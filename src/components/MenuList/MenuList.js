import "./style.css";
import { UserContainer } from "container/User";

const MenuList = props => {
  const { userInfo } = UserContainer.useContainer();

  return (
    <div className="menu-list">
      {userInfo.menus.map(item => (
        <ul>
          <li>{item.menu_name}</li>
        </ul>
      ))}
    </div>
  );
};

export default MenuList;
