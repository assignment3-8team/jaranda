import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { PASSWORD_INPUT_NAME, PASSWORD_INPUT_PLACEHOLDER, PASSWORD_INPUT_TYPE } from "constants/INPUT";

function Password(props) {
  const { name, value, handleChange } = props;
  return <InputInfo type={PASSWORD_INPUT_TYPE} name={name} value={value} placeholder={PASSWORD_INPUT_PLACEHOLDER} handleChange={handleChange} />;
}

export default Password;
