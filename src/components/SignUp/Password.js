import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  PASSWORD_INPUT_ID,
  PASSWORD_INPUT_NAME,
  PASSWORD_INPUT_PATTERN,
  PASSWORD_INPUT_PLACEHOLDER,
  PASSWORD_INPUT_TYPE,
} from "utils/constants/INPUT";

function Password(props) {
  const { handleChange } = props;
  return (
    <label htmlFor={PASSWORD_INPUT_ID}>
      <InputInfo
        type={PASSWORD_INPUT_TYPE}
        id={PASSWORD_INPUT_ID}
        name={PASSWORD_INPUT_NAME}
        placeholder={PASSWORD_INPUT_PLACEHOLDER}
        pattern={PASSWORD_INPUT_PATTERN}
        handleChange={handleChange}
      ></InputInfo>
      숫자, 영어 소문자, 영어 대문자를 포함하여 8글자 이상
    </label>
  );
}

export default Password;
