import React, { useState } from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Address from "components/Address/Address";
import Password from "./Password";
import CreditCard from "components/CreditCard";

function SignUp(props) {
  const { handleSubmit } = props;
  return (
    <form className="signup-form">
      <Email />
      <Password />
      <Name />
      <CreditCard />
      <Address />
      <button onClick={handleSubmit}>submit</button>
    </form>
  );
}

export default SignUp;
