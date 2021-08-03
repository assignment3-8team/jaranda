import React from "react";
import InputInfo from "utils/commons/InputInfo";
import {
  CREDITCARD_INPUT_ID,
  CREDITCARD_INPUT_NAME,
  CREDITCARD_INPUT_PATTERN,
  CREDITCARD_INPUT_PLACEHOLDER,
  CREDITCARD_INPUT_TYPE,
} from "utils/constants/INPUT";

function CreditCard(props) {
  const { handleChange } = props;
  return (
    <label htmlFor={CREDITCARD_INPUT_ID}>
      <InputInfo
        type={CREDITCARD_INPUT_TYPE}
        id={CREDITCARD_INPUT_ID}
        name={CREDITCARD_INPUT_NAME}
        placeholder={CREDITCARD_INPUT_PLACEHOLDER}
        pattern={CREDITCARD_INPUT_PATTERN}
        handleChange={handleChange}
      ></InputInfo>
    </label>
  );
}

export default CreditCard;
