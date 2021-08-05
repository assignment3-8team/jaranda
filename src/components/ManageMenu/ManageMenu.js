import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST } from "constants/menuItem";
import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";

const ManageMenu = props => {
  const { menus, id } = props.userData;

  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);

  const filteredId = props => {
    return props.map(item => item.id);
  };

  const checkedItem = props => {
    return props.map(item => item.checked === true && { ["id"]: Number(item.id) });
  };

  useEffect(() => {
    const setInitialList = () => {
      const initialList = allowedMenuList.map(item => (filteredId(menus).includes(item.id) ? { ...item, checked: true } : { ...item }));
      setAllowedMenuList(initialList);
    };

    setInitialList();
  }, [menus]);

  const onCheckMenu = e => {
    const modifiedList = allowedMenuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));
    setAllowedMenuList(modifiedList);
  };

  //TODO 희영님과 머지 후 데이터 연결 변경
  const data = {
    email: "test1233@naver.com",
    username: "test1323",
    password: "string12",
    card_info: "123-123-123-123",
    address: "주소주소",
    age: 30,
    menus: checkedItem(allowedMenuList),
  };

  const Menudata = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, Menudata) : onRegisterUser(data);
  };

  return (
    <>
      <div className="wrapper">
        {id ? <UserDetails data={props.userData} /> : <div>희영님자리</div>}
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
        <button className="save-button" onClick={onSave}>
          저장
        </button>
      </div>
    </>
  );
};

export { ManageMenu };
