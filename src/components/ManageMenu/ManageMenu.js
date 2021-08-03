import "./style.css";
import { useState } from "react";

const ManageMenu = props => {
  const [menuList, setMenuList] = useState([
    {
      id: 0,
      name: "홈",
      checked: false,
    },
    {
      id: 1,
      name: "선생님게시판",
      checked: false,
    },
    {
      id: 2,
      name: "부모님게시판",
      checked: false,
    },
    {
      id: 3,
      name: "학생게시판",
      checked: false,
    },
    {
      id: 4,
      name: "관리자페이지",
      checked: false,
    },
  ]);

  const onCheck = e => {
    const modifiedArray = menuList.map(item => (item.id == e.target.id ? { ...item, checked: !item.checked } : item));
    setMenuList(modifiedArray);
  };

  const onSubmit = () => {
    console.log(menuList);
  };

  return (
    <div className="wrapper">
      <div className="not-allowed-zone">
        <p>허용하지 않는 메뉴</p>
        {menuList.map(item => {
          return (
            !item.checked && (
              <label>
                {item.name}
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
                {item.name}
                <input type="checkbox" id={item.id} onChange={e => onCheck(e)} name={item.name} value={item.name} />
              </label>
            )
          );
        })}
      </div>
      <button onClick={onSubmit}>저장</button>
    </div>
  );
};

export { ManageMenu };
