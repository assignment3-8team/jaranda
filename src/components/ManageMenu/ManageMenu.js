import "./style.css";
import { useState } from "react";
import { UserContainer } from "container/User/UserContainer";

const ManageMenu = props => {
  const { userInfo, setUserInfo } = UserContainer.useContainer();

  const [menuList, setMenuList] = useState(userInfo.allowed_menu);

  const onCheck = e => {
    const modifiedList = menuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));

    setUserInfo({ ...userInfo, allowed_menu: modifiedList });
    setMenuList(modifiedList);
  };

  return (
    <div className="wrapper">
      <div className="select-box">
        <div className="not-allowed-zone">
          <p>허용하지 않는 메뉴</p>
          {menuList.map(item => {
            return (
              !item.checked && (
                <label key={item.name}>
                  <span>{item.name}</span>
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
                  <span>{item.name}</span>
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.name} value={item.name} />
                </label>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { ManageMenu };
