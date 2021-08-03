import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  RE_PASSWORD_INPUT_ID,
  RE_PASSWORD_INPUT_NAME,
  RE_PASSWORD_INPUT_PATTERN,
  RE_PASSWORD_INPUT_PLACEHOLDER,
  RE_PASSWORD_INPUT_TYPE,
} from "utils/constants/INPUT";

function RePassword(props) {
  const { handleChange } = props;
  return (
    <label htmlFor={RE_PASSWORD_INPUT_ID}>
      <InputInfo
        type={RE_PASSWORD_INPUT_TYPE}
        id={RE_PASSWORD_INPUT_ID}
        name={RE_PASSWORD_INPUT_NAME}
        placeholder={RE_PASSWORD_INPUT_PLACEHOLDER}
        pattern={RE_PASSWORD_INPUT_PATTERN}
        handleChange={handleChange}
      ></InputInfo>
    </label>
  );
}

export default RePassword;
