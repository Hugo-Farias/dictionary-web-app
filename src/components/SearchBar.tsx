import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import { useState } from "react";

const SearchBar = function () {
  const [invalid, setInvalid] = useState<any>(null);

  const font = {
    fontFamily: "Inter",
  };

  return (
    <div className={`search-container`}>
      <input
        type="text"
        className={`search-bar ${invalid ? "invalid" : ""}`}
        placeholder="Search for any word..."
        style={font}
      />
      <img src={searchIcon} alt="Search Icon" />
      {invalid ? <p>Whoops, can't be empty...</p> : ""}
    </div>
  );
};

export default SearchBar;
