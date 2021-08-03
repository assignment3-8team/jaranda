import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  CREDITCARD_INPUT_ID,
  CREDITCARD_INPUT_NAME,
  CREDITCARD_INPUT_PATTERN,
  CREDITCARD_INPUT_PLACEHOLDER,
  CREDITCARD_INPUT_REQUIRED,
  CREDITCARD_INPUT_TYPE,
} from "utils/constants/INPUT";

function CreditCard(props) {
  return (
    <label htmlFor={CREDITCARD_INPUT_ID}>
      <InputInfo
        type={CREDITCARD_INPUT_TYPE}
        id={CREDITCARD_INPUT_ID}
        name={CREDITCARD_INPUT_NAME}
        required={CREDITCARD_INPUT_REQUIRED}
        placeholder={CREDITCARD_INPUT_PLACEHOLDER}
        pattern={CREDITCARD_INPUT_PATTERN}
      ></InputInfo>
    </label>
  );
}

export default CreditCard;
