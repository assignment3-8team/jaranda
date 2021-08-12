import React from "react";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "./InputErrorMessge";
import { RE_PASSWORD_INPUT_NAME, RE_PASSWORD_INPUT_PLACEHOLDER, RE_PASSWORD_INPUT_TYPE } from "constants/INPUT";

function RePassword(props) {
  const { value, onChange, errors } = props;
  return (
    <>
      <InputInfo
        name={RE_PASSWORD_INPUT_NAME}
        onChange={onChange}
        value={value}
        placeholder={RE_PASSWORD_INPUT_PLACEHOLDER}
        type={RE_PASSWORD_INPUT_TYPE}
      />
      <InputErrorMessage errors={errors} name={RE_PASSWORD_INPUT_NAME} />
    </>
  );
}

export default RePassword;
