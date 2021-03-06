import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { PASSWORD_INPUT_ID, PASSWORD_INPUT_NAME, PASSWORD_INPUT_PLACEHOLDER, PASSWORD_INPUT_TYPE } from "constants/INPUT";

function Password(props) {
  const { handleChange } = props;
  return (
    <InputInfo
      type={PASSWORD_INPUT_TYPE}
      id={PASSWORD_INPUT_ID}
      name={PASSWORD_INPUT_NAME}
      placeholder={PASSWORD_INPUT_PLACEHOLDER}
      handleChange={handleChange}
    />
  );
}

export default Password;
