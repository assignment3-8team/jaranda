import { useForm } from "../../hooks/useForm";
import { LOGIN_FORM } from "../../constants/loginForm";
import login from "utils/apis/login";
import { UserContainer } from "container/User";
import { withRouter } from "react-router";
import "./style.css";

const intialLoginValue = {
  email: "",
  password: "",
};

const loginValidation = {
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
    required: {
      value: true,
      message: LOGIN_FORM.ERROR_MESSAGE_PASSWORD_REQUIRED,
    },
  },
};

const Login = props => {
  const { setUserInfo } = UserContainer.useContainer();

  const onSubmit = async () => {
    const payload = {
      identifier: data.email,
      password: data.password,
    };
    const res = await login(payload);
    if (res) {
      const user = {
        jwt: res.jwt,
        ...res.user,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUserInfo(user);
      props.close();
      props.history.push("/");
    } else {
      alert("이메일과 비밀번호를 다시 확인해주세요!");
    }
  };

  const { data, onChange, handleSubmit, errors } = useForm({
    intialLoginValue,
    loginValidation,
    onSubmit,
  });

  return (
    <form className="login_form" onSubmit={handleSubmit} noValidate>
      <h2>로그인</h2>
      <input name="email" onChange={onChange} value={data.email} placeholder="Email" />
      {errors.email && errors.email.map((msg, idx) => <p key={idx}>{msg}</p>)}
      <input name="password" onChange={onChange} value={data.password} placeholder="Password" type="password" />
      {errors.password && errors.password.map((msg, idx) => <p key={idx}>{msg}</p>)}
      <button className="login_btn" type="submit">
        로그인
      </button>
    </form>
  );
};

export default withRouter(Login);
