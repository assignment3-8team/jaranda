import { globalEnv } from "../../config/env";

const getUsersInfo = async payload => {
  const url = `${globalEnv.API_ENDPOINT}/auth/local`;
  const config = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  try {
    const res = await fetch(url, config);
    if (!res.ok) throw new Error("로그인 실패");
    return await res.json();
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export default getUsersInfo;
