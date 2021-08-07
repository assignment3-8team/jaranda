import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST, MENU_NAME } from "constants/menuItem";
import {
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_PLACEHOLDER,
  RE_PASSWORD_INPUT_PLACEHOLDER,
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
  USERNAME_INPUT_PLACEHOLDER,
  AGE_INPUT_PLACEHOLDER,
  CREDITCARD_INPUT_PLACEHOLDER,
} from "constants/INPUT";
import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";
import SignUp from "components/SignUp";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    age: 0,
    creditcard: "",
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
    ...newUser,
    menus: checkedItem(allowedMenuList),
  };

  const Menudata = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, Menudata) : onRegisterUser(data);
  };

  const handleChange = e => {
    const target = e.target.placeholder;
    const value = e.target.value;

    if (target === EMAIL_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, email: value });
    } else if (target === PASSWORD_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, password: value });
    } else if (target === RE_PASSWORD_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, rePassword: value });
    } else if (target === USERNAME_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, name: value });
    } else if (target === AGE_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, age: value });
    } else if (target === CREDITCARD_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, creditcard: value });
    }
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
