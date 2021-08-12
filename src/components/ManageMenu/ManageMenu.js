import "./style.css";
import { useEffect, useState } from "react";
import { ADMIN_MENU_LIST, MENU_NAME } from "constants/menuItem";
import { initialValues, validations } from "constants/INPUT";
import { UserContainer } from "container/User";
import { UserDetails } from "./UserDetails";
import { useForm } from "hooks/useForm";
import SignUp from "components/SignUp";

const ManageMenu = props => {
  const { menus, id } = props.userData;
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();
  const [allowedMenuList, setAllowedMenuList] = useState(ADMIN_MENU_LIST);
  const { data, onChange, handleAddress, handleSubmit, errors } = useForm({
    initialValues,
    validations,
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

  const userData = {
    ...data,
    menus: checkedItem(allowedMenuList),
  };

  const menuData = {
    menus: checkedItem(allowedMenuList),
  };

  const onSave = () => {
    console.log(userData);
    console.log(menuData);
    id ? onUpdateUserInfo(id, menuData) : onRegisterUser(userData);
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSubmit} noValidate>
          {id ? <UserDetails data={props.userData} /> : <SignUp onChange={onChange} handleAddress={handleAddress} data={data} errors={errors} />}
        </form>
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
