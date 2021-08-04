import React, { useState } from "react";

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
  //const [errorMessage, setErrorMessage] = useState("");

  let errorMessage = "";

  const validateInput = () => {
    if (!VALID_EMAIL.test(email)) {
      errorMessage = "유효한 메일 주소를 입력하세요";
      return -1;
    } else if (!VALID_PASSWORD.test(password)) {
      errorMessage =
        "비밀번호는 영문 대소문자와 숫자를 포함하여 8자리 이상 입력해주세요";
      return -1;
    } else if (password !== "" && rePassword !== password) {
      errorMessage = "비밀번호가 일치하지 않습니다";
      return -1;
    } else if (name === "") {
      errorMessage = "이름을 입력하세요";
      return -1;
    } else if (age < 0 || age > 100) {
      errorMessage = "0~100 사이로 입력해주세요";
      return -1;
    } else if (!VALID_CREDITCARD.test(creditcard)) {
      errorMessage = "유효한 카드번호를 입력하세요";
      return -1;
    } else if (address === "") {
      errorMessage = "주소를 입력하세요";
      return -1;
    }
    return 0;
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
    const validateResult = validateInput();
    console.log(errorMessage);
    console.log(validateResult);
    if (validateResult === 0) {
      postUserInfo();
      errorMessage = "";
    }
  };

  return (
    <div className="register-page">
      <div className="register-page-title">회원 가입</div>
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
      {errorMessage.length !== 0 ? <div>{errorMessage}</div> : null}
      <div className="register-submit">
        <button
          type="button"
          className="register-button"
          onClick={handleSubmit}
        >
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Register;
