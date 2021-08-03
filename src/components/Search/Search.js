import "./style.css";
// import { useState } from "react";

const Search = props => {
  const onClick = () => {
    console.log("onClick");
  };

  const onKeyPress = () => {
    console.log("onKeyPress");
  };

  return (
    <>
      <input type="serch" placeholder="Search..." onKeyPress={onKeyPress} />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </>
  );
};

export { Search };
