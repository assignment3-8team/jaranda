import React from "react";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "./InputErrorMessge";
import { PASSWORD_INPUT_NAME, PASSWORD_INPUT_PLACEHOLDER, PASSWORD_INPUT_TYPE } from "constants/INPUT";

function Password(props) {
  const { value, onChange, errors } = props;
  return (
    <>
      <InputInfo name={PASSWORD_INPUT_NAME} onChange={onChange} value={value} placeholder={PASSWORD_INPUT_PLACEHOLDER} type={PASSWORD_INPUT_TYPE} />
      <InputErrorMessage errors={errors} name={PASSWORD_INPUT_NAME} />
    </>
  );
}

export default Password;
