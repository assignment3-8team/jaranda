import { SingleInput } from "./SingleInput";
import { useForm } from "./useForm";
import { LOGIN_FORM } from "../../constants/loginForm";
import "./style.css";

const initialValues = {
  email: "",
  password: "",
};

const validations = {
  email: {
    pattern: {
      value: LOGIN_FORM.REG_EMAIL,
      message: LOGIN_FORM.ERROR_MESSAGE_EMAIL_PATTERN,
    },
    required: {
      value: true,
      message: LOGIN_FORM.ERROR_MESSAGE_EMAIL_REQUIRED,
    },
  },
  password: {
    pattern: {
      value: LOGIN_FORM.REG_PASSWORD,
      message: LOGIN_FORM.ERROR_MESSAGE_PASSWORD_PATTERN,
    },
    required: {
      value: true,
      message: LOGIN_FORM.ERROR_MESSAGE_PASSWORD_REQUIRED,
    },
  },
};

const Login = () => {
  const onSubmit = e => {
    // 로그인 로직
    alert("로그인!");
  };
  const { data, onChange, handleSubmit, errors } = useForm({
    initialValues,
    validations,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>로그인</h2>
      <SingleInput name="email" onChange={onChange} value={data.email} placeholder="Email" />
      {errors.email && errors.email.map((msg, idx) => <p key={idx}>{msg}</p>)}
      <SingleInput name="password" onChange={onChange} value={data.password} placeholder="Password" type="password" />
      {errors.password && errors.password.map((msg, idx) => <p key={idx}>{msg}</p>)}
      <button type="submit">로그인</button>
    </form>
  );
};

export { Login };
