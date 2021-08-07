import React from "react";

const InputInfo = props => {
  const { labelfor, value, type, placeholder, handleChange } = props;
  return (
    <div className="common-input-wrapper">
      <label htmlFor={labelfor}></label>
      <input className="common-input" type={type} id={labelfor} value={value} placeholder={placeholder} onChange={handleChange} noValidate />
    </div>
  );
};

export default InputInfo;
