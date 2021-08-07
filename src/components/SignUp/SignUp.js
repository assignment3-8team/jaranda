import React from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Address from "components/Address";
import Age from "./Age";

function SignUp(props) {
  const { user, handleChange, handleAddress } = props;

  return (
    <div className="signup-items">
      <Email className="signup-item" value={user.email} handleChange={handleChange} />
      <Password className="signup-item" value={user.password} handleChange={handleChange} />
      <RePassword className="signup-item" value={user.rePassword} handleChange={handleChange} />
      <Name className="signup-item" value={user.name} handleChange={handleChange} />
      <Age className="signup-item" value={user.age} handleChange={handleChange} />
      <CreditCard className="signup-item" value={user.creditcard} handleChange={handleChange} creditcard={user.creditcard} />
      <Address className="signup-item" handleAddress={handleAddress} address={user.address} />
    </div>
  );
}

export default SignUp;
