import React, { useState } from "react";
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

  const handleSubmit = () => {
    console.log(age);
  };

  const handleEmail = (value) => {
    if (VALID_EMAIL.test(value)) {
      setEmail(value);
    } else {
      setErrorMessage("유효하지 않은 이메일");
    }
  };

  const handlePassword = (value) => {
    if (VALID_PASSWORD.test(value)) {
      setPassword(value);
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

  return (
    <div className="register-page">
      <div className="register-page-title">회원 가입</div>

      <SignUp
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleRePassword={handleRePassword}
        handleName={handleName}
        handleAge={handleAge}
        handleCreditcard={handleCreditcard}
        handleSubmit={handleSubmit}
        handleAddress={setAddress}
      />
      {errorMessage.length !== 0 && errorMessage}
      <div>{email}</div>
      <div>{password}</div>
      <div>{rePassword}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{creditcard}</div>
      <div>{address}</div>
    </div>
  );
};

export default Register;
