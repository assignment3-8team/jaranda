import React from "react";

const InputInfo = (props) => {
  const {
    labelfor,
    labelname,
    type,
    required,
    placeholder,
    pattern,
    handleChange,
  } = props;
  return (
    <input
      type={type}
      id={labelfor}
      name={labelname}
      required={required}
      placeholder={placeholder}
      pattern={pattern}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default InputInfo;
