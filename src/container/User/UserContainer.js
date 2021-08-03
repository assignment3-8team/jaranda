import { useState } from "react";
import { createContainer } from "unstated-next";

const useUserContainer = () => {
  const [user, setUser] = useState({
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
    ],
    is_admin: true,
  });

  return { user, setUser };
};

export const UserContainer = createContainer(useUserContainer);
