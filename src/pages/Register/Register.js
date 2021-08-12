import React, { useState } from "react";
import SignUp from "components/SignUp";
import { VALID_CREDITCARD, VALID_EMAIL, VALID_PASSWORD, initialUserState } from "constants/INPUT";
import { globalEnv } from "config/env";
import PageHeader from "pages/PageHeader";
import { useForm } from "hooks/useForm";

const initialValues = {
  email: "",
  password: "",
  re_password: "",
  username: "",
  age: "",
  card_info: "",
  address: "",
};

const validations = {
  email: {
    pattern: {
      value: VALID_EMAIL,
      message: "올바른 이메일을 입력해주세요",
    },
    required: {
      value: true,
      message: "이메일을 입력해주세요",
    },
  },
  password: {
    pattern: {
      value: VALID_PASSWORD,
      message: "문자, 숫자, 특수문자를 조합하여 8자 이상 입력해주세요",
    },
    required: {
      value: true,
      message: "패스워드를 입력해주세요",
    },
  },
  username: {
    required: {
      value: true,
      message: "이름을 입력해주세요",
    },
  },
  age: {
    required: {
      value: true,
      message: "나이를 입력해주세요",
    },
  },
  card_info: {
    pattern: {
      value: VALID_CREDITCARD,
      message: "숫자 16자리를 입력해주세요",
    },
    required: {
      value: true,
      message: "카드 번호를 입력해주세요",
    },
  },
};

const Register = props => {
  const { history } = props;

  //const [errorMessage, setErrorMessage] = useState("");
  //const [newUser, setNewUser] = useState(initialUserState);

  const [address, setAddress] = useState("");

  const onSubmit = event => {
    const userInfo = { ...data, address: address };
    console.log(userInfo);
  };
  /*
  const postUserInfo = () => {
    const url = `${globalEnv.API_ENDPOINT}/auth/local/register`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        alert("가입이 완료되었습니다 🙆‍♀️");
        setErrorMessage("");
        setNewUser(initialUserState);
        history.push({ pathname: "/" });
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = () => {
    if (validateInput()) postUserInfo();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };
*/

  const handleAddress = value => {
    setAddress(value);
  };

  const { data, onChange, handleSubmit, errors } = useForm({
    initialValues,
    validations,
    onSubmit,
  });

  return (
    <>
      <PageHeader title="회원가입" englishTitle="Sign Up" />
      <div className="register-page">
        <SignUp onChange={onChange} handleSubmit={handleSubmit} handleAddress={handleAddress} data={data} errors={errors} address={address} />
        {/*<SignUp className="signup-wrapper" user={newUser} handleChange={handleChange} handleAddress={handleAddress} />
        </form>
        <div className="register-error-message">{errorMessage.length !== 0 && errorMessage}</div>
        <div className="register-submit">
          <button type="button" className="register-button" onClick={handleSubmit}>
            가입하기
          </button>
        </div>*/}
      </div>
    </>
  );
};

export default Register;
