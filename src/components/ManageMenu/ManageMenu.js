import "./style.css";
import { useState } from "react";
import { UserContainer } from "container/User/UserContainer";

const ManageMenu = props => {
  const { user, setUser } = UserContainer.useContainer();

  const [menuList, setMenuList] = useState(user.allowed_menu);

  const onCheck = e => {
    const modifiedList = menuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));

    console.log("user", user.allowed_menu, modifiedList);
    setUser({ ...user, allowed_menu: modifiedList });
    setMenuList(modifiedList);
  };

  const onSubmit = e => {};

  return (
    <div className="wrapper">
      <div className="select-box">
        <div className="not-allowed-zone">
          <p>허용하지 않는 메뉴</p>
          {menuList.map(item => {
            return (
              !item.checked && (
                <label key={item.name}>
                  {item.name}
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.name} value={item.name} />
                </label>
              )
            );
          })}
        </div>
        <div className="allowed-zone">
          <p>허용하는 메뉴</p>
          {menuList.map(item => {
            return (
              item.checked && (
                <label>
                  {item.name}
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.name} value={item.name} />
                </label>
              )
            );
          })}
        </div>
      </div>
      <button onClick={onSubmit}>저장</button>
    </div>
  );
};

export { ManageMenu };
