import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST, MENU_NAME } from "constants/menuItem";

import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";
import SignUp from "components/SignUp";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditcard, setCreditcard] = useState("");
  const [address, setAddress] = useState("");

  const initializeInfo = () => {
    setEmail("");
    setPassword("");
    setName("");
    setAge("");
    setCreditcard("");
    setAddress("");
  };

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
    email: email,
    username: name,
    password: password,
    card_info: creditcard,
    address: address,
    age: age,
    menus: checkedItem(allowedMenuList),
  };

  const Menudata = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, Menudata) : onRegisterUser(data);
    initializeInfo();
  };

  return (
    <>
      <div className="wrapper">
        {id ? (
          <UserDetails data={props.userData} />
        ) : (
          <SignUp
            className="signup-wrapper"
            handleEmail={setEmail}
            handlePassword={setPassword}
            handleName={setName}
            handleAge={setAge}
            handleCreditcard={setCreditcard}
            handleAddress={setAddress}
            creditcard={creditcard}
            address={address}
          />
        )}
        <div className="select-box">
          <div className="not-allowed-zone">
            <p>???????????? ?????? ??????</p>
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
            <div>??????</div>
            <div>??????</div>
          </div>
          <div className="allowed-zone">
            <p>???????????? ??????</p>
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
          ??????
        </button>
      </div>
    </>
  );
};

export { ManageMenu };
