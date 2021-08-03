import React from "react";

const InputInfo = (props) => {
  const { labelfor, labelname, type, placeholder, handleChange } = props;
  return (
    <>
      <label htmlFor={labelfor}></label>
      <input
        type={type}
        id={labelfor}
        name={labelname}
        placeholder={placeholder}
        onBlur={handleChange}
        noValidate
      />
    </>
  );
};

export default InputInfo;
