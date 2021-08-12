import React from "react";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "./InputErrorMessge";
import { EMAIL_INPUT_NAME, EMAIL_INPUT_PLACEHOLDER, EMAIL_INPUT_TYPE } from "constants/INPUT";

function Email(props) {
  const { value, onChange, errors } = props;
  return (
    <>
      <InputInfo name={EMAIL_INPUT_NAME} onChange={onChange} value={value} placeholder={EMAIL_INPUT_PLACEHOLDER} type={EMAIL_INPUT_TYPE} />
      <InputErrorMessage errors={errors} name={EMAIL_INPUT_NAME} />
    </>
  );
}

export default Email;
