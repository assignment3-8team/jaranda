import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";
import { globalEnv } from "../../config/env";

const useUserContainer = () => {
  const [userInfo, setUserInfo] = useState();
  // unstated-next 예시 테스트코드

  const onUpdateUserInfo = (id, data) => {
    axios({
      method: "put",
      url: `${globalEnv.API_ENDPOINT}/user/${id}`,
      data,
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onRegisterUser = data => {
    axios({
      method: "post",
      url: `${globalEnv.API_ENDPOINT}/auth/local/register`,
      data,
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

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

  return { userInfo, setUserInfo, onUpdateUserInfo, onRegisterUser, logIn };
};

export const UserContainer = createContainer(useUserContainer);
