import React, { useState } from "react";
import SignUp from "components/SignUp";
import {
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME,
  RE_PASSWORD_INPUT_NAME,
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
  USERNAME_INPUT_NAME,
  AGE_INPUT_NAME,
  CREDITCARD_INPUT_NAME,
} from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";

const Register = props => {
  const { history } = props;
  const [errorMessage, setErrorMessage] = useState("");
  //const [rePassword, setRePassword] = useState("");
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    re_password: "",
    username: "",
    age: 0,
    card_info: "",
    address: "",
  });
  /*
  const validateInput = () => {
    if (!VALID_EMAIL.test(newUser.email)) {
      setErrorMessage("유효한 메일 주소를 입력하세요");
      return 0;
    } else if (!VALID_PASSWORD.test(newUser.password)) {
      setErrorMessage("비밀번호는 영문 대소문자, 특수문자, 숫자를 포함하여 8자리 이상 입력해주세요");
      return 0;
    } else if (newUser.password !== "" && newUser.rePassword !== newUser.password) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      return 0;
    } else if (newUser.username === "") {
      setErrorMessage("이름을 입력하세요");
      return 0;
    } else if (newUser.age < 0 || newUser.age > 100) {
      setErrorMessage("나이를 입력하세요");
      return 0;
    } else if (!VALID_CREDITCARD.test(newUser.card_info)) {
      setErrorMessage("유효한 카드번호를 입력하세요");
      return 0;
    } else if (newUser.address === "") {
      setErrorMessage("주소를 입력하세요");
      return 0;
    }
    return 1;
  };
*/
  const postUserInfo = () => {
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;
    /*
    const userInfo = {
      [EMAIL_INPUT_NAME]: newUser.EMAIL_INPUT_NAME,
      [USERNAME_INPUT_NAME]: newUser.USERNAME_INPUT_NAME,
      [PASSWORD_INPUT_NAME]: newUser.PASSWORD_INPUT_NAME,
      [CREDITCARD_INPUT_NAME]: newUser.CREDITCARD_INPUT_NAME,
      address: newUser.address,
      [AGE_INPUT_NAME]: newUser.AGE_INPUT_NAME,
    };
*/
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("가입이 완료되었습니다 🙆‍♀️");
        setErrorMessage("");
        setNewUser({
          email: "",
          password: "",
          re_password: "",
          username: "",
          age: 0,
          card_info: "",
          address: "",
        });
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = () => {
    postUserInfo();
  };
  /*
  const handleChange = e => {
    const { name, value } = e.target;

    if (name === EMAIL_INPUT_NAME) {
      setNewUser({ ...newUser, EMAIL_INPUT_NAME: value });
    } else if (name === PASSWORD_INPUT_NAME) {
      setNewUser({ ...newUser, password: value });
    } else if (name === RE_PASSWORD_INPUT_NAME) {
      setNewUser({ ...newUser, rePassword: value });
    } else if (name === USERNAME_INPUT_NAME) {
      setNewUser({ ...newUser, name: value });
    } else if (name === AGE_INPUT_NAME) {
      setNewUser({ ...newUser, age: value });
    } else if (name === CREDITCARD_INPUT_NAME) {
      setNewUser({ ...newUser, creditcard: value });
    }
  };
*/
  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
  /*
  const handleConfirmPassword = value => {
    setRePassword(value);
  };
*/
  const handleAddress = value => {
    setNewUser({ ...newUser, address: value });
  };

  return (
    <>
      <PageHeader title="회원가입" englishTitle="Sign Up" />
      <div className="register-page">
        <SignUp className="signup-wrapper" user={newUser} handleChange={handleChange} handleAddress={handleAddress} />
        <div className="register-error-message">{errorMessage.length !== 0 ? errorMessage : null}</div>
        <div className="register-submit">
          <button type="button" className="register-button" onClick={handleSubmit}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
