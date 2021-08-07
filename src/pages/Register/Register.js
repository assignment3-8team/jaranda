import React, { useState } from "react";
import SignUp from "components/SignUp";
import {
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_PLACEHOLDER,
  RE_PASSWORD_INPUT_PLACEHOLDER,
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
  USERNAME_INPUT_PLACEHOLDER,
  AGE_INPUT_PLACEHOLDER,
  CREDITCARD_INPUT_PLACEHOLDER,
} from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";

const Register = props => {
  const { history } = props;
  //const [errorMessage, setErrorMessage] = useState("");

  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    age: 0,
    creditcard: "",
    address: "",
  });
  /*
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
*/
  const postUserInfo = () => {
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;
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
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = () => {
    /*
    const validateResult = validateInput();
    if (validateResult) {
      postUserInfo();
    }
    */
    console.log(newUser);
    console.log(JSON.stringify(newUser));

    postUserInfo();
  };

  const handleChange = e => {
    const target = e.target.placeholder;
    const value = e.target.value;

    if (target === EMAIL_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, email: value });
    } else if (target === PASSWORD_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, password: value });
    } else if (target === RE_PASSWORD_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, rePassword: value });
    } else if (target === USERNAME_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, name: value });
    } else if (target === AGE_INPUT_PLACEHOLDER) {
      setNewUser({ ...newUser, age: value });
    } else if (target === CREDITCARD_INPUT_PLACEHOLDER) {
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
        <div className="register-error-message">if error</div>
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
