import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = options => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});
  const target = useRef(null);

  const checkValid = useCallback(
    (key, validation) => {
      const value = data[key];
      const error = [];
      let valid = true;
      if (validation?.required?.value && !value) {
        valid = false;
        error.push(validation?.required?.message);
        return [valid, error];
      }
      const pattern = validation?.pattern;
      if (pattern?.value && !RegExp(pattern.value).test(value)) {
        valid = false;
        error.push(pattern.message);
        return [valid, error];
      }

      const custom = validation?.custom;
      if (custom?.isValid && !custom.isValid(value)) {
        valid = false;
        error.push(custom?.message);
        return [valid, error];
      }

      return [valid, error];
    },
    [data],
  );

  useEffect(() => {
    if (target.current) {
      const name = target.current;
      const validation = options?.validations[name];
      if (validation) {
        const [, error] = checkValid(name, validation);
        setErrors(pre => ({
          ...pre,
          [name]: error,
        }));
      }
    }
  }, [checkValid, options?.validations]);

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
      target.current = e.target.name;
    },
    [data],
  );

  const handleAddress = value => {
    setData({ ...data, address: value });
    target.current = "address";
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validations = options?.validations;
    let valid = true;
    const error = {};
    if (validations) {
      for (const key in validations) {
        const [isValid, newError] = checkValid(key, validations[key]);
        error[key] = newError;
        valid = valid && isValid;
      }
    }
    if (!valid) {
      setErrors(error);
      return;
    }

    if (options?.onSubmit) {
      options.onSubmit();
    }
    target.current = null;
  };

  return {
    data,
    onChange,
    handleAddress,
    handleSubmit,
    errors,
  };
};
