import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  USERNAME_INPUT_ID,
  USERNAME_INPUT_NAME,
  USERNAME_INPUT_PATTERN,
  USERNAME_INPUT_PLACEHOLDER,
  USERNAME_INPUT_REQUIRED,
  USERNAME_INPUT_TYPE,
} from "utils/constants/INPUT";

function Name(props) {
  return (
    <label htmlFor={USERNAME_INPUT_ID}>
      <InputInfo
        type={USERNAME_INPUT_TYPE}
        id={USERNAME_INPUT_ID}
        name={USERNAME_INPUT_NAME}
        required={USERNAME_INPUT_REQUIRED}
        placeholder={USERNAME_INPUT_PLACEHOLDER}
        pattern={USERNAME_INPUT_PATTERN}
      ></InputInfo>
    </label>
  );
}

export default Name;
