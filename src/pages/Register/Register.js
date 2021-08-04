import React, { useState } from "react";
import api from "api";

import { END_POINT } from "utils/constants/END_POINT";
import SignUp from "components/SignUp";
import {
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
} from "utils/constants/INPUT";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditcard, setCreditcard] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmail = (value) => {
    if (VALID_EMAIL.test(value)) {
      setEmail(value);
      setErrorMessage("");
    } else {
      setErrorMessage("유효하지 않은 이메일");
    }
  };

  const handlePassword = (value) => {
    if (VALID_PASSWORD.test(value)) {
      setPassword(value);
      setErrorMessage("");
    } else {
      setErrorMessage(
        "영문 대소문자, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요"
      );
    }
  };

  const handleRePassword = (value) => {
    if (password !== "" && value !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
    }
    setRePassword(value);
  };

  const handleCreditcard = (value) => {
    if (VALID_CREDITCARD.test(value)) {
      setCreditcard(value);
    } else {
      setErrorMessage("유효하지 않은 카드 번호");
    }
  };

  const handleAge = (value) => {
    if (value < 0 || value > 100) {
      setErrorMessage("0~100 사이로 입력해주세요");
    } else {
      setAge(value);
    }
  };

  const handleName = (value) => {
    if (value.length === 0) {
      setErrorMessage("이름을 입력해주세요");
    } else {
      setName(value);
    }
  };

  const confirmPassword = () => {
    if (password !== "" && rePassword !== password) {
      setErrorMessage("비밀번호가 다릅니다");
    }
  };

  const postUserInfo = () => {
    const userInfo = {
      email: email,
      username: name,
      password: password,
      card_info: creditcard,
      address: address,
      age: age,
      is_admin: false,
      menus: [],
    };
    console.log(userInfo);
    const url = `${END_POINT}/auth/local/register`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const handleSubmit = () => {
    confirmPassword();
    postUserInfo();
  };

  return (
    <div className="register-page">
      <div className="register-page-title">회원 가입</div>

      <SignUp
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
      {errorMessage.length !== 0 && errorMessage}
      <button type="button" className="register-button" onClick={handleSubmit}>
        회원 가입
      </button>
    </div>
  );
};

export default Register;
