export const EMAIL_INPUT_TYPE = "text";
export const EMAIL_INPUT_PLACEHOLDER = "이메일";
//export const EMAIL_INPUT_REQUIRED = true;
export const EMAIL_INPUT_PATTERN = "";
export const EMAIL_INPUT_NAME = "email";
export const EMAIL_INPUT_ID = "email";

export const USERNAME_INPUT_PATTERN = "";
export const USERNAME_INPUT_NAME = "username";
export const USERNAME_INPUT_ID = "username";
//export const USERNAME_INPUT_REQUIRED = true;
export const USERNAME_INPUT_PLACEHOLDER = "이름";
export const USERNAME_INPUT_TYPE = "text";

export const PASSWORD_INPUT_PATTERN = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export const PASSWORD_INPUT_NAME = "password";
export const PASSWORD_INPUT_ID = "password";
//export const PASSWORD_INPUT_REQUIRED = true;
export const PASSWORD_INPUT_PLACEHOLDER = "비밀번호";
export const PASSWORD_INPUT_TYPE = "password";

export const RE_PASSWORD_INPUT_PATTERN = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);
export const RE_PASSWORD_INPUT_NAME = "password";
export const RE_PASSWORD_INPUT_ID = "password";
//export const RE_PASSWORD_INPUT_REQUIRED = true;
export const RE_PASSWORD_INPUT_PLACEHOLDER = "비밀번호 확인";
export const RE_PASSWORD_INPUT_TYPE = "password";

export const CREDITCARD_INPUT_PATTERN = "";
export const CREDITCARD_INPUT_NAME = "creditcard";
export const CREDITCARD_INPUT_ID = "creditcard";
//export const CREDITCARD_INPUT_REQUIRED = true;
export const CREDITCARD_INPUT_PLACEHOLDER = "신용카드 번호";
export const CREDITCARD_INPUT_TYPE = "text";
