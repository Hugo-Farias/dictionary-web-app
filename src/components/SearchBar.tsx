import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useState } from "react";

interface propsT {
  font: string;
}

const SearchBar: React.FC<propsT> = function ({ font }) {
  const [invalid, setInvalid] = useState<any>(null);

  return (
    <div className={`search-container`}>
      <input
        style={{ fontFamily: font }}
        type="text"
        className={`search-bar ${invalid ? "invalid" : ""}`}
        placeholder="Search for any word..."
      />
      <img src={searchIcon} alt="Search Icon" />
      {invalid ? <p>Whoops, can't be empty...</p> : ""}
    </div>
  );
};

export default SearchBar;
