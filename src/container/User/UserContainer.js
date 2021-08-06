import { useState } from "react";
import { createContainer } from "unstated-next";
import axios from "axios";
import { globalEnv } from "../../config/env";

const useUserContainer = () => {
  const [userInfo, setUserInfo] = useState();

  const onUpdateUserInfo = (id, data) => {
    axios({
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjksImlhdCI6MTYyODE3OTc4MCwiZXhwIjoxNjMwNzcxNzgwfQ.Gftp_Y7568IulQvlfJua03hYSaOBLDAvOCiIsZ0WsEk`,
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
