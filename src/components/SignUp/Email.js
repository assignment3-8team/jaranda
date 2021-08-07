import React from "react";
import InputInfo from "utils/commons/InputInfo";
import { EMAIL_INPUT_ID, EMAIL_INPUT_NAME, EMAIL_INPUT_PLACEHOLDER, EMAIL_INPUT_TYPE } from "constants/INPUT";

function Email(props) {
  const { handleChange } = props;
  return (
    <InputInfo
      type={EMAIL_INPUT_TYPE}
      id={EMAIL_INPUT_ID}
      value={EMAIL_INPUT_NAME}
      placeholder={EMAIL_INPUT_PLACEHOLDER}
      handleChange={handleChange}
    />
  );
}

export default Email;
