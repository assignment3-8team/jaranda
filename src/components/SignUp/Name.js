import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { USERNAME_INPUT_ID, USERNAME_INPUT_PLACEHOLDER, USERNAME_INPUT_TYPE } from "constants/INPUT";

function Name(props) {
  const { value, handleChange } = props;
  return (
    <InputInfo type={USERNAME_INPUT_TYPE} id={USERNAME_INPUT_ID} value={value} placeholder={USERNAME_INPUT_PLACEHOLDER} handleChange={handleChange} />
  );
}

export default Name;
