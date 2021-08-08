import { VALID_EMAIL, VALID_PASSWORD, VALID_CREDITCARD } from "constants/INPUT";

export const validate = ({ email, password, re_password, username, age, card_info }) => {
  const errors = {};

  if (!email) {
    errors.email = "이메일을 입력해주세요";
  } else if (!VALID_EMAIL.test(email)) {
    errors.email = "유효한 이메일을 입력해주세요";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (!VALID_PASSWORD.test(password)) {
    errors.password = "영문 대소문자, 숫자, 특수문자를 포함하여 8글자 이상 입력해주세요";
  }

  if (re_password !== password) {
    errors.re_password = "비밀번호가 동일하지 않습니다";
  }

  if (!username) {
    errors.username = "이름을 입력해주세요";
  }

  if (!age) {
    errors.age = "나이를 입력해주세요";
  } else if (age < 0 || age > 100) {
    errors.age = "0~100세로 나이를 입력해주세요";
  }

  if (!card_info) {
    errors.card_info = "카드번호를 입력해주세요";
  } else if (!VALID_CREDITCARD.test(card_info)) {
    errors.card_info = "16자리 숫자만 입력해주세요";
  }

  return errors;
};
