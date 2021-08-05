import "./style.css";
import { UserContainer } from "container/User";

const MenuList = props => {
  const { history } = props;
  const { userInfo } = UserContainer.useContainer();

  return (
    <div className="menu-list">
      <ul>
        <li>홈</li>
        {userInfo?.menus.map((item, index) => (
          <li key={item.id + index}>{item.menu_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
