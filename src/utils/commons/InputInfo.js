import React from "react";

const InputInfo = (props) => {
  const { labelfor, labelname, type, placeholder, handleChange } = props;
  return (
    <input
      type={type}
      id={labelfor}
      name={labelname}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      noValidate
    />
  );
};

export default InputInfo;
