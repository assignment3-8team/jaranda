import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { AGE_INPUT_NAME, AGE_INPUT_PLACEHOLDER, AGE_INPUT_TYPE } from "constants/INPUT";

function Age(props) {
  const { name, value, handleChange } = props;
  return <InputInfo type={AGE_INPUT_TYPE} name={name} value={value} placeholder={AGE_INPUT_PLACEHOLDER} handleChange={handleChange} />;
}

export default Age;
