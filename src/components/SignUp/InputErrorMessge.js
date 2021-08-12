import React from "react";

const InputErrorMessage = props => {
  const { errors, name } = props;

  return <div>{errors[name] && errors[name].map((msg, idx) => <span key={idx}>{msg}</span>)}</div>;
};

export default InputErrorMessage;
