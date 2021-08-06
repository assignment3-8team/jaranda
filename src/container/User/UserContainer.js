import { useState } from "react";
import { createContainer } from "unstated-next";
import { globalEnv } from "../../config/env";
import axios from "axios";

const useUserContainer = () => {
  const user = localStorage.getItem("user");
  const [userInfo, setUserInfo] = useState(user ? JSON.parse(user) : null);

  const onUpdateUserInfo = (id, data) => {
    axios({
      headers: {
        Authorization: `Bearer ${userInfo.jwt}`,
      },
      method: "put",
      url: `${globalEnv.API_ENDPOINT}/users/${id}`,
      data,
    })
      .then(response => {
        console.log(response);
        alert("변경이 완료되었습니다 👍");
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
        alert("생성이 완료되었습니다 🙆‍♀️");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return { userInfo, setUserInfo, onUpdateUserInfo, onRegisterUser };
};

export const UserContainer = createContainer(useUserContainer);
