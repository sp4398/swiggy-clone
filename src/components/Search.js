import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <input
        type="txt"
        placeholder="Search"
        className="input-box"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button className="search-btn" onClick={() => {
        console.log(searchText);
        
      }}>
        Search
      </button>
    </div>
  );
};

export default Search;
