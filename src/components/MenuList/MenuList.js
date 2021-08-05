import "./style.css";
import { UserContainer } from "container/User";
import { withRouter } from "react-router";
import { MENU_LIST } from "constants/menuItem";
import { useMemo } from "react";

const MenuList = props => {
  const { userInfo } = UserContainer.useContainer();
  const { history } = props;

  const findPath = useMemo(() => {
    const filterMenu = MENU_LIST.filter(item => {
      return userInfo.menus.some(userItem => item.menu_name === userItem.menu_name);
    });
    return filterMenu;
  }, [userInfo]);

  return (
    <div className="menu-list">
      <ul>
        <li className="menu-item" onClick={() => history.push("/")}>
          홈
        </li>
        {findPath.map((item, index) => (
          <li
            className="menu-item"
            onClick={() => {
              history.push(item.path);
            }}
            key={item.id + index}
          >
            {item.menu_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(MenuList);
