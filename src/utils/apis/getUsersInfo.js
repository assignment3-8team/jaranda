import { globalEnv } from "../../config/env";

const getUsersInfo = async token => {
  const url = `${globalEnv.API_ENDPOINT}/users`;
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const res = await fetch(url, config);
    if (!res.ok) throw new Error("유저 데이터 요청 실패");
    return await res.json();
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export default getUsersInfo;
