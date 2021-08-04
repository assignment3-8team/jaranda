import "./style.css";
import { useEffect, useState } from "react";
import { MENU_LIST } from "../../constants/menuItem";

const ManageMenu = props => {
  const { menus } = props.userData;
  const filteredId = menus.map(item => item.id);

  const [allowedMenuList, setAllowedMenuList] = useState(MENU_LIST);

  useEffect(() => {
    for (let i = 1; i < filteredId.length + 1; i++) {
      const initialList = allowedMenuList.map(item => (item.id === i ? { ...item, checked: true } : { ...item }));
      setAllowedMenuList(initialList);
    }
  }, []);

  const onCheck = e => {
    const modifiedList = allowedMenuList.map(item => (item.id === Number(e.target.id) ? { ...item, checked: !item.checked } : item));
    setAllowedMenuList(modifiedList);
  };

  const onSave = () => {
    // TODO: signup components 와 머지후 저장기능 구현
  };

  console.log("menuList", allowedMenuList);
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
                  <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.menu_name} value={item.menu_name} />
                </label>
              )
            );
          })}
        </div>
        <div className="allowed-zone">
          <p>허용하는 메뉴</p>
          {allowedMenuList.map(item => {
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
      <button onClick={onSave}>저장</button>
    </div>
  );
};

export { ManageMenu };
