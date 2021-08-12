import React from "react";
import InputInfo from "utils/commons/InputInfo";
import InputErrorMessage from "./InputErrorMessge";
import { AGE_INPUT_NAME, AGE_INPUT_PLACEHOLDER, AGE_INPUT_TYPE } from "constants/INPUT";

function Age(props) {
  const { value, onChange, errors } = props;
  return (
    <>
      <InputInfo name={AGE_INPUT_NAME} onChange={onChange} value={value} placeholder={AGE_INPUT_PLACEHOLDER} type={AGE_INPUT_TYPE} />
      <InputErrorMessage errors={errors} name={AGE_INPUT_NAME} />
    </>
  );
}

export default Age;
