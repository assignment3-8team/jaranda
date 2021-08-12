import React from "react";

import Email from "components/SignUp/Email";
import Name from "components/SignUp/Name";
import Password from "./Password";
import RePassword from "./RePassword";
import CreditCard from "components/CreditCard";
import Address from "components/Address";
import Age from "./Age";

function SignUp(props) {
  const { data, handleSubmit, onChange, errors, handleAddress, isAdminMenu } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Email onChange={onChange} value={data.email} errors={errors} className="signup-item" />
        <Password onChange={onChange} value={data.password} errors={errors} className="signup-item" />
        <RePassword onChange={onChange} value={data.re_password} errors={errors} className="signup-item" />
        <Name onChange={onChange} value={data.name} errors={errors} className="signup-item" />
        <Age onChange={onChange} value={data.age} errors={errors} className="signup-item" />
        <CreditCard value={data.card_info} onChange={onChange} errors={errors} className="signup-item" />
        <Address handleAddress={handleAddress} address={data.address} errors={errors} className="signup-item" />
        {!isAdminMenu && (
          <button className="register-button" type="submit">
            회원가입
          </button>
        )}
      </form>
    </>
  );
}

export default SignUp;
