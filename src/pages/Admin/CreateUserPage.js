import { useState } from "react";
import { ManageMenu } from "components/ManageMenu/ManageMenu";
import SignUp from "components/SignUp";
import { VALID_CREDITCARD, VALID_EMAIL, VALID_PASSWORD } from "utils/constants/INPUT";
import { MENU_LIST } from "constants/menuItem";
import { UserContainer } from "container/User";

const CreateUserPage = props => {
  const { history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditcard, setCreditcard] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allowedMenuList, setAllowedMenuList] = useState(MENU_LIST);
  const { onUpdateUserInfo, onRegisterUser } = UserContainer.useContainer();

  const defaultInfo = {
    id: null,
    email: "",
    username: "",
    password: "",
    card_info: "",
    address: "",
    age: 0,
    is_admin: false,
    menus: MENU_LIST,
  };

  const validateInput = () => {
    if (!VALID_EMAIL.test(email)) {
      setErrorMessage("유효한 메일 주소를 입력하세요");
      return 0;
    } else if (!VALID_PASSWORD.test(password)) {
      setErrorMessage("비밀번호는 영문 대소문자, 특수문자, 숫자를 포함하여 8자리 이상 입력해주세요");
      return 0;
    } else if (password !== "" && rePassword !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      return 0;
    } else if (name === "") {
      setErrorMessage("이름을 입력하세요");
      return 0;
    } else if (age <= 0 || age > 100) {
      setErrorMessage("나이를 입력하세요");
      return 0;
    } else if (!VALID_CREDITCARD.test(creditcard)) {
      setErrorMessage("유효한 카드번호를 입력하세요");
      return 0;
    } else if (address === "") {
      setErrorMessage("주소를 입력하세요");
      return 0;
    }
    return 1;
  };

  const handleSave = menulist => {
    console.log(menulist);
    setAllowedMenuList(menulist);
    console.log("parent", allowedMenuList);
    const userInfo = {
      id: null,
      email: email,
      username: name,
      password: password,
      card_info: creditcard,
      address: address,
      age: age,
      is_admin: false,
      menus: allowedMenuList,
    };
    const validateResult = validateInput();
    if (validateResult) {
      setErrorMessage("");
      console.log(userInfo);
      //id ? onUpdateUserInfo(id, userInfo) : onRegisterUser(userInfo);
      //history.push({ pathname: "/" });
    }
  };

  return (
    <div>
      <SignUp
        className="signup-wrapper"
        handleEmail={setEmail}
        handlePassword={setPassword}
        handleRePassword={setRePassword}
        handleName={setName}
        handleAge={setAge}
        handleCreditcard={setCreditcard}
        handleAddress={setAddress}
        creditcard={creditcard}
        address={address}
      />
      {console.log(MENU_LIST)}
      <ManageMenu userData={defaultInfo} handleSave={handleSave} />
    </div>
  );
};

export default CreateUserPage;
