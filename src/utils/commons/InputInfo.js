import React from "react";

const InputInfo = props => {
  const { labelfor, name, value, type, placeholder, onChange } = props;
  return (
    <div className="common-input-wrapper">
      <label htmlFor={labelfor}></label>
      <input className="common-input" type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default InputInfo;
