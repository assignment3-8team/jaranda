import React, { useState } from "react";
import SignUp from "components/SignUp";
import { VALID_CREDITCARD, VALID_EMAIL, VALID_PASSWORD, initialUserState } from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";
import { validate } from "utils/commons/validate";

const Register = props => {
  const { history } = props;

  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState(initialUserState);

  const postUserInfo = () => {
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("가입이 완료되었습니다 🙆‍♀️");
        setNewUser(initialUserState);
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = () => {
    setErrors(validate(newUser));
    console.log(errors);
    postUserInfo();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddress = value => {
    setNewUser({ ...newUser, address: value });
  };

  return (
    <>
      <PageHeader title="회원가입" englishTitle="Sign Up" />
      <div className="register-page">
        <SignUp className="signup-wrapper" user={newUser} handleChange={handleChange} handleAddress={handleAddress} />
        <div className="register-error-message">{Object.keys(errors).length !== 0 ? errors.email : null}</div>
        <div className="register-submit">
          <button type="button" className="register-button" onClick={handleSubmit}>
            가입하기
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
