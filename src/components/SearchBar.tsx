import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useRef, useState } from "react";

interface propsT {
  font: string;
}

const SearchBar: React.FC<propsT> = function ({ font }) {
  const searchRef = useRef(null);
  const [invalid, setInvalid] = useState<any>(null);

  const handleSubmit = function () {
    console.log(searchRef);
  };

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: font }}
          ref={searchRef}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
        />
        <button>
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
      {invalid ? <p>Whoops, can't be empty...</p> : ""}
    </div>
  );
};

export default SearchBar;
