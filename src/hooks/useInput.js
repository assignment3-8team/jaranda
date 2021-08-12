import { useState } from "react";

const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);

  const onChange = event => {
    const { value } = event.target;

    let willUpdate = true;

    if (typeof validate === "function") {
      willUpdate = validate(value);
    }

    if (willUpdate) {
      setValue(value);
    }

    return { value, setValue, onChange };
  };
};

export default useInput;
