import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { RE_PASSWORD_INPUT_ID, RE_PASSWORD_INPUT_PLACEHOLDER, RE_PASSWORD_INPUT_TYPE } from "constants/INPUT";

function RePassword(props) {
  const { name, value, handleChange } = props;
  return (
    <InputInfo type={RE_PASSWORD_INPUT_TYPE} name={name} value={value} placeholder={RE_PASSWORD_INPUT_PLACEHOLDER} handleChange={handleChange} />
  );
}

export default RePassword;
