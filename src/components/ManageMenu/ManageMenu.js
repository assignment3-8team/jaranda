import "./style.css";
import { useEffect, useState } from "react";
import { UserContainer } from "container/User";
import { MENU_LIST } from "../../constants/menuItem";

const ManageMenu = props => {
  const { userInfo, setUserInfo, logIn } = UserContainer.useContainer();
  const [menuList, setMenuList] = useState(MENU_LIST);

  console.log("menuList", menuList, "userInfo", userInfo.menus);
  const [id, setId] = [1, 2, 3, 4];

  useEffect(() => {
    const apiList = userInfo?.menu?.map(item => (id.includes(item.id) ? { ...item, checked: true } : item));
    console.log(apiList);
  }, [userInfo]);

  const onCheck = e => {
    const modifiedList = menuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));
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
                <label key={item.menu_name}>
                  <span>{item.menu_name}</span>
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.menu_name} value={item.menu_name} />
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
                  <span>{item.menu_name}</span>
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.menu_name} value={item.menu_name} />
                </label>
              )
            );
          })}
        </div>
      </div>
      <button onClick={logIn}>로그인</button>
    </div>
  );
};

export { ManageMenu };
