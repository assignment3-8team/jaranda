import React from "react";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "./InputErrorMessge";
import { USERNAME_INPUT_NAME, USERNAME_INPUT_PLACEHOLDER, USERNAME_INPUT_TYPE } from "constants/INPUT";

function Name(props) {
  const { value, onChange, errors } = props;
  return (
    <>
      <InputInfo name={USERNAME_INPUT_NAME} onChange={onChange} value={value} placeholder={USERNAME_INPUT_PLACEHOLDER} type={USERNAME_INPUT_TYPE} />
      <InputErrorMessage errors={errors} name={USERNAME_INPUT_NAME} />
    </>
  );
}

export default Name;
