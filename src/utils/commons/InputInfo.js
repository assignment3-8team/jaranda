import React from "react";

const InputInfo = (props) => {
  const { labelfor, labelname, type, required, placeholder, pattern } = props;
  return (
    <input
      type={type}
      id={labelfor}
      name={labelname}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
    />
  );
};

export default InputInfo;
