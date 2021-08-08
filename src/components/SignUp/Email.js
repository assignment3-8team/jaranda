import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { EMAIL_INPUT_NAME, EMAIL_INPUT_PLACEHOLDER, EMAIL_INPUT_TYPE } from "constants/INPUT";

function Email(props) {
  const { name, value, handleChange } = props;
  return <InputInfo type={EMAIL_INPUT_TYPE} name={name} value={value} placeholder={EMAIL_INPUT_PLACEHOLDER} handleChange={handleChange} />;
}

export default Email;
