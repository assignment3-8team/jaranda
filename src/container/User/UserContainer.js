import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";

const useUserContainer = () => {
  const [userInfo, setUserInfo] = useState({
    user_id: 0,
    user_email: "sunhwa@naver.com",
    user_name: "sunhwa",
    user_addredd: "",
    user_card_info: "",
    user_age: "",
    allowed_menu: [
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
        name: "학부모게시판",
        checked: false,
      },
      {
        id: 3,
        name: "관리자게시판",
        checked: false,
      },
    ],
    is_admin: true,
  });

  const logIn = () => {
    axios({
      method: "post",
      url: "https://sheltered-beyond-43580.herokuapp.com/auth/local",
      data: { identifier: "sunhwa", password: "123123" },
    })
      .then(response => {
        console.log("response", response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return { userInfo, setUserInfo, logIn };
};

export const UserContainer = createContainer(useUserContainer);
