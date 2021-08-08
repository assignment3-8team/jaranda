export const validateInput = user => {
  if (user.email && !VALID_EMAIL.test(user.email)) {
    setErrorMessage("유효한 메일 주소를 입력하세요");
  } else if (user.password && !VALID_PASSWORD.test(user.password)) {
    setErrorMessage("비밀번호는 영문 대소문자, 특수문자, 숫자를 포함하여 8자리 이상 입력해주세요");
  } else if (user.password !== "" && user.re_password && user.re_password !== user.password) {
    setErrorMessage("비밀번호가 일치하지 않습니다");
  } else if (user.age < 0 || user.age > 100) {
    setErrorMessage("0~100 사이로 나이를 입력하세요");
  } else if (user.card_info && !VALID_CREDITCARD.test(user.card_info)) {
    setErrorMessage("유효한 카드번호를 입력하세요");
  } else {
    setErrorMessage("");
  }
};
