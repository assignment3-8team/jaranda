import React, { useState } from "react";
import SignUp from "components/SignUp";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [creditcard, setCreditcard] = useState("");
  const [address, setAddress] = useState("");

  const confirmPassword = () => {
    if (password !== rePassword) {
      alert("Please Confirm Your Password");
    }
  };

  const checkNoInput = () => {
    if (!email || !password || !rePassword || !name || !creditcard) {
      alert("Please Check Your Input");
    }
  };

  const handleSubmit = () => {
    console.log(email);
    checkNoInput();
    confirmPassword();
  };

  return (
    <div className="register-page">
      <div className="register-page-title">회원 가입</div>

      <SignUp
        handleEmail={setEmail}
        handlePassword={setPassword}
        handleRePassword={setRePassword}
        handleName={setName}
        handleCreditcard={setCreditcard}
        handleSubmit={handleSubmit}
        handleAddress={setAddress}
      />

      <div>{email}</div>
      <div>{password}</div>
      <div>{rePassword}</div>
      <div>{name}</div>
      <div>{creditcard}</div>
      <div>{address}</div>
    </div>
  );
};

export default Register;
