import "./style.css";
import { useRef } from "react";

const Search = (props) => {

    const { baseData, setData } = props;
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    if (value.length === 0) {
        setData(prevState => [...baseData]);
        return;
    }
    const filteredData = baseData.filter(e => {
        return (
            e.username.includes(value) || e.email.includes(value)
        )
    });
    setData(filteredData);
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
      <input className="search-input" ref={inputRef} type="serch" placeholder="이름으로 검색" onKeyPress={onKeyPress} />
      <button className="search-button" type="submit" onClick={onClick}>
        검색
      </button>
    </>
  );
};

export default Search;
