import React, { useState } from "react";
import SignUp from "components/SignUp";
import {
  EMAIL_INPUT_ID,
  PASSWORD_INPUT_ID,
  RE_PASSWORD_INPUT_ID,
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
  USERNAME_INPUT_ID,
  AGE_INPUT_ID,
  CREDITCARD_INPUT_ID,
} from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";

const Register = props => {
  const { history } = props;
  const [errorMessage, setErrorMessage] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    age: 0,
    creditcard: "",
    address: "",
  });

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
    } else if (newUser.name === "") {
      setErrorMessage("이름을 입력하세요");
      return 0;
    } else if (newUser.age < 0 || newUser.age > 100) {
      setErrorMessage("나이를 입력하세요");
      return 0;
    } else if (!VALID_CREDITCARD.test(newUser.creditcard)) {
      setErrorMessage("유효한 카드번호를 입력하세요");
      return 0;
    } else if (newUser.address === "") {
      setErrorMessage("주소를 입력하세요");
      return 0;
    }
    return 1;
  };

  const postUserInfo = () => {
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;
    const userInfo = {
      email: newUser.email,
      username: newUser.name,
      password: newUser.password,
      card_info: newUser.creditcard,
      address: newUser.address,
      age: newUser.age,
      is_admin: false,
      menus: [],
    };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
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
          rePassword: "",
          name: "",
          age: 0,
          creditcard: "",
          address: "",
        });
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = () => {
    console.log(newUser);
    if (validateInput()) {
      postUserInfo();
    }
  };

  const handleChange = e => {
    const target = e.target.id;
    const value = e.target.value;

    if (target === EMAIL_INPUT_ID) {
      setNewUser({ ...newUser, email: value });
    } else if (target === PASSWORD_INPUT_ID) {
      setNewUser({ ...newUser, password: value });
    } else if (target === RE_PASSWORD_INPUT_ID) {
      setNewUser({ ...newUser, rePassword: value });
    } else if (target === USERNAME_INPUT_ID) {
      setNewUser({ ...newUser, name: value });
    } else if (target === AGE_INPUT_ID) {
      setNewUser({ ...newUser, age: value });
    } else if (target === CREDITCARD_INPUT_ID) {
      setNewUser({ ...newUser, creditcard: value });
    }
  };

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
