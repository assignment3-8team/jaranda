import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  PASSWORD_INPUT_ID,
  PASSWORD_INPUT_NAME,
  PASSWORD_INPUT_PATTERN,
  PASSWORD_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_REQUIRED,
  PASSWORD_INPUT_TYPE,
} from "utils/constants/INPUT";

function Password(props) {
  return (
    <label htmlFor={PASSWORD_INPUT_ID}>
      <InputInfo
        type={PASSWORD_INPUT_TYPE}
        id={PASSWORD_INPUT_ID}
        name={PASSWORD_INPUT_NAME}
        required={PASSWORD_INPUT_REQUIRED}
        placeholder={PASSWORD_INPUT_PLACEHOLDER}
        pattern={PASSWORD_INPUT_PATTERN}
      ></InputInfo>
    </label>
  );
}

export default Password;
