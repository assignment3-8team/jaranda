import React from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Address from "components/Address";

function SignUp(props) {
  const { handleEmail, handleChange, handleSubmit, handleAddress } = props;

  return (
    <>
      <form className="signup-form">
        <Email handleChange={handleEmail} />
        <Password handleChange={handleChange} />
        <RePassword handleChange={handleChange} />
        <Name handleChange={handleChange} />
        <CreditCard handleChange={handleChange} />
      </form>
      <Address handleAddress={handleAddress} />
      <button onClick={handleSubmit}>회원 가입</button>
    </>
  );
}

export default SignUp;
