import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";
import { globalEnv } from "../../config/env";

const useUserContainer = () => {
  const [userInfo, setUserInfo] = useState({
    menus: [],
  });

  //테스트코드
  const logIn = () => {
    axios({
      method: "post",
      url: `${globalEnv.API_ENDPOINT}/auth/local`,
      data: { identifier: "테스트", password: "123123" },
    })
      .then(response => {
        setUserInfo(response.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return { userInfo, setUserInfo, logIn };
};

export const UserContainer = createContainer(useUserContainer);
