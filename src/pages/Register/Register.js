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
    if (newUser.address === "") {
      setErrorMessage("주소를 입력하세요");
    }
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
