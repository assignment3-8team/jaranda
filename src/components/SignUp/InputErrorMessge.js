import React from "react";

const InputErrorMessage = props => {
  const { errors, name } = props;

  return (
    <div>
      {errors[name] &&
        errors[name].map((msg, idx) => (
          <span className="signup-error-message" key={idx}>
            {msg}
          </span>
        ))}
    </div>
  );
};

export default InputErrorMessage;
