import React from "react";

const page404 = props => {
  const _handleOnClick = () => {
    props.history.push({
      pathname: `/`,
    });
  };

  return (
    <div className="error-wrap">
      <h1>404</h1>
      <div>찾을 수 없는 페이지입니다.</div>
      <div>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다 : )</div>
      <button onClick={_handleOnClick}>홈으로</button>
    </div>
  );
};

export { page404 };
