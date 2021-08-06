import { globalEnv } from "../../config/env";

const login = async payload => {
  const url = `${globalEnv.API_ENDPOINT}/auth/local/`;
  const config = {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await fetch(url, config);
    if (!res.ok) throw new Error("로그인 실패");
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default login;
