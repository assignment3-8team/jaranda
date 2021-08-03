import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  EMAIL_INPUT_ID,
  EMAIL_INPUT_NAME,
  EMAIL_INPUT_PATTERN,
  EMAIL_INPUT_PLACEHOLDER,
  EMAIL_INPUT_REQUIRED,
  EMAIL_INPUT_TYPE,
} from "utils/constants/INPUT";

function Email(props) {
  return (
    <label htmlFor={EMAIL_INPUT_ID}>
      <InputInfo
        type={EMAIL_INPUT_TYPE}
        id={EMAIL_INPUT_ID}
        name={EMAIL_INPUT_NAME}
        required={EMAIL_INPUT_REQUIRED}
        placeholder={EMAIL_INPUT_PLACEHOLDER}
        pattern={EMAIL_INPUT_PATTERN}
      ></InputInfo>
    </label>
  );
}

export default Email;
