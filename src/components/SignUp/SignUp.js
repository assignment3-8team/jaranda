import React from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Address from "components/Address";
import Age from "./Age";

function SignUp(props) {
  const {
    handleEmail,
    handlePassword,
    handleRePassword,
    handleName,
    handleAge,
    handleCreditcard,
    handleSubmit,
    handleAddress,
  } = props;

  return (
    <>
      <Email handleChange={handleEmail} />
      <Password handleChange={handlePassword} />
      <RePassword handleChange={handleRePassword} />
      <Name handleChange={handleName} />
      <Age handleChange={handleAge} />
      <CreditCard handleChange={handleCreditcard} />

      <Address handleAddress={handleAddress} />
      <button onClick={handleSubmit}>회원 가입</button>
    </>
  );
}

export default SignUp;
