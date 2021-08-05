import "./style.css";
import { useEffect, useState } from "react";
import { MENU_LIST } from "constants/menuItem";
import { UserContainer } from "container/User";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();

  const filteredId = menus.map(item => item.id);
  const [allowedMenuList, setAllowedMenuList] = useState(MENU_LIST);

  useEffect(() => {
    const setInitialList = () => {
      const initialList = allowedMenuList.map(item => (filteredId.includes(item.id) ? { ...item, checked: true } : { ...item }));
      setAllowedMenuList(initialList);
    };

    setInitialList();
  }, [menus]);

  const onCheckMenu = e => {
    const modifiedList = allowedMenuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));
    setAllowedMenuList(modifiedList);
  };
  console.log(allowedMenuList);

  //TODO 희영님과 머지 후 데이터 연결 변경
  const data = {
    email: "random@naver.com",
    username: "원티드",
    password: "string12",
    card_info: "123-123-123-123",
    address: "주소주소",
    age: 12,
    menus: [
      {
        id: 1,
      },
    ],
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, data) : onRegisterUser(data);
  };

  return (
    <div className="wrapper">
      <div className="select-box">
        <div className="not-allowed-zone">
          <p>허용하지 않는 메뉴</p>
          {allowedMenuList.map(item => {
            return (
              !item.checked && (
                <label key={item.menu_name}>
                  <span>{item.menu_name}</span>
                  <input type="checkbox" id={item.id} onChange={e => onCheckMenu(e)} name={item.menu_name} value={item.menu_name} />
                </label>
              )
            );
          })}
        </div>
        <div className="allowed-zone">
          <p>허용하는 메뉴</p>
          {allowedMenuList.map((item, index) => {
            return (
              item.checked && (
                <label key={item.id + index}>
                  <span>{item.menu_name}</span>
                  <input type="checkbox" id={item.id} onChange={e => onCheckMenu(e)} name={item.menu_name} value={item.menu_name} />
                </label>
              )
            );
          })}
        </div>
      </div>
      <button onClick={onSave()}>저장</button>
    </div>
  );
};

export { ManageMenu };
