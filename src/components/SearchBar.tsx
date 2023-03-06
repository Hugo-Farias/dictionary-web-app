import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { useRef, useState } from "react";
import { getCurrentWord } from "../helpers/functions";
import { useNavigate } from "react-router-dom";

interface propsT {
  font: string;
}

const SearchBar: React.FC<propsT> = function ({ font }) {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const [invalid, setInvalid] = useState<boolean>(false);

  const handleSubmit = function (e: any) {
    e.preventDefault();
    const { value } = searchRef.current!;
    if (!value) return setInvalid(true);

    navigate(value);
  };

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: font }}
          ref={searchRef}
          onInput={() => setInvalid(false)}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
          value={getCurrentWord()}
          max="10"
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
