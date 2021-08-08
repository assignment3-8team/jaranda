import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST, MENU_NAME } from "constants/menuItem";
import {
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME,
  RE_PASSWORD_INPUT_NAME,
  USERNAME_INPUT_NAME,
  AGE_INPUT_NAME,
  CREDITCARD_INPUT_NAME,
} from "constants/INPUT";
import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";
import SignUp from "components/SignUp";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);
  const [newUser, setNewUser] = useState({
    [EMAIL_INPUT_NAME]: "",
    [PASSWORD_INPUT_NAME]: "",
    [RE_PASSWORD_INPUT_NAME]: "",
    [USERNAME_INPUT_NAME]: "",
    [AGE_INPUT_NAME]: 0,
    [CREDITCARD_INPUT_NAME]: "",
    address: "",
  });

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

  const data = {
    [EMAIL_INPUT_NAME]: newUser.EMAIL_INPUT_NAME,
    [USERNAME_INPUT_NAME]: newUser.USERNAME_INPUT_NAME,
    [PASSWORD_INPUT_NAME]: newUser.PASSWORD_INPUT_NAME,
    [CREDITCARD_INPUT_NAME]: newUser.CREDITCARD_INPUT_NAME,
    address: newUser.address,
    [AGE_INPUT_NAME]: newUser.AGE_INPUT_NAME,
    menus: checkedItem(allowedMenuList),
  };

  const Menudata = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, Menudata) : onRegisterUser(data);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddress = value => {
    setNewUser({ ...newUser, address: value });
  };

  return (
    <>
      <div className="wrapper">
        {id ? <UserDetails data={props.userData} /> : <SignUp user={newUser} handleChange={handleChange} handleAddress={handleAddress} />}
        <div className="select-box">
          <div className="not-allowed-zone">
            <p>허용하지 않는 메뉴</p>
            {allowedMenuList.map(item => {
              return (
                !item.checked && (
                  <label key={item.menu_name}>
                    <span>{MENU_NAME[item.menu_name]}</span>
                    <input type="checkbox" id={item.id} onChange={e => onCheckMenu(e)} name={item.menu_name} value={item.menu_name} />
                  </label>
                )
              );
            })}
          </div>
          <div className="arrow-wrap">
            <div>▶️</div>
            <div>◀️</div>
          </div>
          <div className="allowed-zone">
            <p>허용하는 메뉴</p>
            {allowedMenuList.map((item, index) => {
              return (
                item.checked && (
                  <label key={item.id + index}>
                    <span>{MENU_NAME[item.menu_name]}</span>
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
