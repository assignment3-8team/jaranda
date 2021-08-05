import "./style.css";
import { useRef } from "react";

const Search = () => {
  const userInfo = [
    {
      user_email: "1@naver.com",
      user_name: "박민혁",
    },
    {
      user_email: "2@naver.com",
      user_name: "김민혁",
    },
    {
      user_email: "3@naver.com",
      user_name: "이민혁",
    },
    {
      user_email: "3@naver.com",
      user_name: "김민혁",
    },
  ];

  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    const filteredData = userInfo.filter(e => e.user_name === value);
    console.log(filteredData);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <input className="search-input" ref={inputRef} type="serch" placeholder="Search..." onKeyPress={onKeyPress} />
      <button className="search-button" type="submit" onClick={onClick}>
        검색
      </button>
    </>
  );
};

export { Search };
