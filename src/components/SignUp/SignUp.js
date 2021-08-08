import React from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Address from "components/Address";
import Age from "./Age";
import {
  EMAIL_INPUT_NAME,
  PASSWORD_INPUT_NAME,
  RE_PASSWORD_INPUT_NAME,
  USERNAME_INPUT_NAME,
  AGE_INPUT_NAME,
  CREDITCARD_INPUT_NAME,
} from "constants/INPUT";

function SignUp(props) {
  const { user, handleChange, handleAddress } = props;

  return (
    <div className="signup-items">
      <form>
        <Email className="signup-item" name={EMAIL_INPUT_NAME} value={user.EMAIL_INPUT_NAME} handleChange={handleChange} />
        <Password className="signup-item" name={PASSWORD_INPUT_NAME} value={user.PASSWORD_INPUT_NAME} handleChange={handleChange} />
        <RePassword className="signup-item" name={RE_PASSWORD_INPUT_NAME} value={user.RE_PASSWORD_INPUT_NAME} handleChange={handleChange} />
        <Name className="signup-item" name={USERNAME_INPUT_NAME} value={user.USERNAME_INPUT_NAME} handleChange={handleChange} />
        <Age className="signup-item" name={AGE_INPUT_NAME} value={user.AGE_INPUT_NAME} handleChange={handleChange} />
        <CreditCard
          className="signup-item"
          name={CREDITCARD_INPUT_NAME}
          value={user.CREDITCARD_INPUT_NAME}
          handleChange={handleChange}
          creditcard={user.CREDITCARD_INPUT_NAME}
        />
      </form>
      <Address className="signup-item" handleAddress={handleAddress} address={user.address} />
    </div>
  );
}

export default SignUp;
