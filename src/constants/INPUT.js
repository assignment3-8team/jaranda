export const EMAIL_INPUT_TYPE = "text";
export const EMAIL_INPUT_PLACEHOLDER = "이메일";
export const EMAIL_INPUT_NAME = "email";

export const USERNAME_INPUT_NAME = "username";
export const USERNAME_INPUT_PLACEHOLDER = "이름";
export const USERNAME_INPUT_TYPE = "text";

export const PASSWORD_INPUT_NAME = "password";
export const PASSWORD_INPUT_PLACEHOLDER = "비밀번호 - 영문 대소문자, 숫자, 특수문자 포함 8글자 이상";
export const PASSWORD_INPUT_TYPE = "password";

export const RE_PASSWORD_INPUT_NAME = "re_password";
export const RE_PASSWORD_INPUT_PLACEHOLDER = "비밀번호 확인";
export const RE_PASSWORD_INPUT_TYPE = "password";

export const CREDITCARD_INPUT_NAME = "card_info";
export const CREDITCARD_INPUT_PLACEHOLDER = "숫자 16자리만 입력하세요";
export const CREDITCARD_INPUT_TYPE = "text";

export const ADDRESS_INPUT_NAME = "address";
export const ADDRESS_INPUT_PLACEHOLDER = "주소";
export const ADDRESS_INPUT_TYPE = "text";

export const AGE_INPUT_NAME = "age";
export const AGE_INPUT_PLACEHOLDER = "나이";
export const AGE_INPUT_TYPE = "number";

export const VALID_PASSWORD = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
export const VALID_EMAIL = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
);
export const VALID_CREDITCARD = new RegExp("^[0-9]{16}$");

export const initialUserState = {
  email: "",
  password: "",
  re_password: "",
  username: "",
  age: "",
  card_info: "",
  address: "",
};
