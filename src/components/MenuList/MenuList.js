import "./style.css";
import { UserContainer } from "container/User/UserContainer";

const MenuList = props => {
  const { user, setUser } = UserContainer.useContainer();
  console.log(user.allowed_menu);
  return (
    <div className="menu-list">
      {user.allowed_menu.map(item => (
        <ul>{item.checked && <li>{item.name}</li>}</ul>
      ))}
    </div>
  );
};

export default MenuList;
