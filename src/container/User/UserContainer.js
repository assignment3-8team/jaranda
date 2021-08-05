import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";
import { globalEnv } from "../../config/env";

const useUserContainer = () => {
  const [userInfo, setUserInfo] = useState();
  console.log("user", userInfo);
  // unstated-next 예시 테스트코드

  const logIn = () => {
    axios({
      method: "post",
      url: `${globalEnv.API_ENDPOINT}/auth/local`,
      data: { identifier: "admin@admin.com", password: "string12" },
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
