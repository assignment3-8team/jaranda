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
    handleAddress,
    creditcard,
    address,
  } = props;

  return (
    <div className="signup-items">
      <Email className="signup-item" handleChange={handleEmail} />
      <Password className="signup-item" handleChange={handlePassword} />
      <RePassword className="signup-item" handleChange={handleRePassword} />
      <Name className="signup-item" handleChange={handleName} />
      <Age className="signup-item" handleChange={handleAge} />
      <CreditCard
        className="signup-item"
        handleChange={handleCreditcard}
        creditcard={creditcard}
      />
      <Address
        className="signup-item"
        handleAddress={handleAddress}
        address={address}
      />
    </div>
  );
}

export default SignUp;
