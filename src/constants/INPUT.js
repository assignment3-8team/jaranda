export const EMAIL_INPUT_TYPE = "text";
export const EMAIL_INPUT_PLACEHOLDER = "이메일";
export const EMAIL_INPUT_NAME = "email";
export const EMAIL_INPUT_ID = "email";

export const USERNAME_INPUT_PATTERN = "";
export const USERNAME_INPUT_NAME = "username";
export const USERNAME_INPUT_ID = "username";
export const USERNAME_INPUT_PLACEHOLDER = "이름";
export const USERNAME_INPUT_TYPE = "text";

export const PASSWORD_INPUT_NAME = "password";
export const PASSWORD_INPUT_ID = "password";
export const PASSWORD_INPUT_PLACEHOLDER = "비밀번호";
export const PASSWORD_INPUT_TYPE = "password";

export const RE_PASSWORD_INPUT_NAME = "re_password";
export const RE_PASSWORD_INPUT_ID = "re_password";
export const RE_PASSWORD_INPUT_PLACEHOLDER = "비밀번호 확인";
export const RE_PASSWORD_INPUT_TYPE = "password";

export const CREDITCARD_INPUT_NAME = "creditcard";
export const CREDITCARD_INPUT_ID = "creditcard";
export const CREDITCARD_INPUT_PLACEHOLDER = "숫자만 입력하세요";
export const CREDITCARD_INPUT_TYPE = "text";

export const AGE_INPUT_NAME = "age";
export const AGE_INPUT_ID = "age";
export const AGE_INPUT_PLACEHOLDER = "나이";
export const AGE_INPUT_TYPE = "number";

export const VALID_PASSWORD = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
export const VALID_EMAIL = new RegExp(
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
);
export const VALID_CREDITCARD = new RegExp("^[0-9]{16}$");
