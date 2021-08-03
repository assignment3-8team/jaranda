import React, { useState } from "react";
import SignUp from "components/SignUp";
import {
  CREDITCARD_INPUT_NAME,
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME,
  RE_PASSWORD_INPUT_NAME,
  AGE_INPUT_NAME,
  VALID_CREDITCARD,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_AGE,
  EMAIL_INPUT_ID,
} from "utils/constants/INPUT";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [creditcard, setCreditcard] = useState("");
  const [address, setAddress] = useState("");
  /*
  const handleChange = (event) => {
    event.preventDefault();
    const { id, value } = event.target;
    console.log(`name: ${event.target.id}`);
    console.log(value);
    let errorMessage = "";

    switch (id) {
      case PASSWORD_INPUT_NAME:
        errorMessage = VALID_PASSWORD.test(value)
          ? ""
          : "비밀번호는 영문 대소문자, 숫자, 특수문자를 포함하여 8자 이상 입력해주세요";
        if (errorMessage === "") setPassword(value);
        break;
      case RE_PASSWORD_INPUT_NAME:
        errorMessage =
          !password && value !== password ? "비밀번호가 정확하지 않습니다" : "";
        if (errorMessage === "") setRePassword(value);
        break;
      case AGE_INPUT_NAME:
        const ageNumber = Number.parseInt(value);
        if (ageNumber < 0 || ageNumber > 130 || ageNumber === NaN) {
          errorMessage = "나이 정보가 정확하지 않습니다";
        } else {
          setAge(ageNumber);
        }
        break;
      case CREDITCARD_INPUT_NAME:
        errorMessage = VALID_CREDITCARD.test(value)
          ? ""
          : "카드번호가 정확하지 않습니다";
        if (errorMessage === "") setCreditcard(value);
        break;
      default:
        break;
    }
  };
  */

  const confirmPassword = () => {
    if (password !== rePassword) {
      alert("Please Confirm Your Password");
    }
  };

  const checkNoInput = () => {
    if (
      !email ||
      !password ||
      !rePassword ||
      !name ||
      !creditcard ||
      !address
    ) {
      alert("Please Check Your Input");
    }
  };

  const handleSubmit = () => {
    console.log(age);
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
        handleSubmit={handleSubmit}
        handleAddress={setAddress}
      />

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
