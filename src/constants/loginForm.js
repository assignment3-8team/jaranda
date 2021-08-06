export const LOGIN_FORM = {
  REG_EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  REG_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,16}$/,
  ERROR_MESSAGE_EMAIL_REQUIRED: "이메일을 입력해주세요",
  ERROR_MESSAGE_PASSWORD_REQUIRED: "패스워드를 입력해주세요",
  ERROR_MESSAGE_EMAIL_PATTERN: "올바른 이메일을 입력해주세요",
  ERROR_MESSAGE_PASSWORD_PATTERN: "문자, 숫자, 특수문자를 조합하여 8 ~ 16자 이내로 입력해주세요",
};
