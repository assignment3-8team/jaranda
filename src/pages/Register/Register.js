import React, { useState, useEffect } from "react";
import SignUp from "components/SignUp";
import { initialValues, validations } from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";
import { useForm } from "hooks/useForm";

const Register = props => {
  const { history } = props;

  const onSubmit = () => {
    console.log(data);
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("가입이 완료되었습니다 🙆‍♀️");
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const { data, onChange, handleAddress, handleSubmit, errors } = useForm({
    initialValues,
    validations,
    onSubmit,
  });

  useEffect(() => {
    validations.re_password.pattern.value = data.password;
  }, [data]);

  return (
    <>
      <PageHeader title="회원가입" englishTitle="Sign Up" />
      <div className="register-page">
        <SignUp onChange={onChange} handleSubmit={handleSubmit} handleAddress={handleAddress} data={data} errors={errors} isAdminMenu={false} />
      </div>
    </>
  );
};

export default Register;
