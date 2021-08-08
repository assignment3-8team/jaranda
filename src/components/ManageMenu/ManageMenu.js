import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST, MENU_NAME } from "constants/menuItem";
import { initialUserState } from "constants/INPUT";
import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";
import { VALID_EMAIL, VALID_CREDITCARD, VALID_PASSWORD } from "constants/INPUT";
import SignUp from "components/SignUp";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);
  const [newUser, setNewUser] = useState(initialUserState);
  const [errorMessage, setErrorMessage] = useState("");

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
    email: newUser.email,
    username: newUser.username,
    password: newUser.password,
    card_info: newUser.card_info,
    address: newUser.address,
    age: newUser.age,
    menus: checkedItem(allowedMenuList),
  };

  const Menudata = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    id ? onUpdateUserInfo(id, Menudata) : onRegisterUser(data);
  };

  const validateInput = () => {
    if (newUser.email && !VALID_EMAIL.test(newUser.email)) {
      setErrorMessage("유효한 메일 주소를 입력하세요");
    } else if (newUser.password && !VALID_PASSWORD.test(newUser.password)) {
      setErrorMessage("비밀번호는 영문 대소문자, 특수문자, 숫자를 포함하여 8자리 이상 입력해주세요");
    } else if (newUser.password !== "" && newUser.re_password && newUser.re_password !== newUser.password) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
    } else if (newUser.age < 0 || newUser.age > 100) {
      setErrorMessage("0~100 사이로 나이를 입력하세요");
    } else if (newUser.card_info && !VALID_CREDITCARD.test(newUser.card_info)) {
      setErrorMessage("유효한 카드번호를 입력하세요");
    } else {
      setErrorMessage("");
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    validateInput();
  };

  const handleAddress = value => {
    setNewUser({ ...newUser, address: value });
  };

  return (
    <>
      <div className="wrapper">
        {id ? (
          <UserDetails data={props.userData} />
        ) : (
          <SignUp user={newUser} handleChange={handleChange} handleAddress={handleAddress}>
            {errorMessage ? errorMessage : null}
          </SignUp>
        )}
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
