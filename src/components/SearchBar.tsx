import "./SearchBar.scss";
import searchIcon from "../assets/images/icon-search.svg";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { getCurrentWord, getSlice } from "../helpers/functions";
import useGoTo from "../hooks/useGoTo";

const SearchBar = function () {
  const searchRef = useRef<HTMLInputElement>(null);
  const { currentFont } = getSlice();
  const goto = useGoTo();
  const currentWord = getCurrentWord();
  const [invalid, setInvalid] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(currentWord);

  if (searchRef.current) searchRef.current.focus();

  const handleSubmit = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!searchRef.current) return;

    const { value } = searchRef.current;

    if (!value) return setInvalid(true);

    goto(value);
  };

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    setInvalid(false);
    if (searchRef.current) setInputValue(searchRef.current.value);
  };

  useEffect(() => setInputValue(currentWord), [currentWord]);

  return (
    <div className={`search-container`}>
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontFamily: currentFont.cssValue }}
          ref={searchRef}
          onChange={handleChange}
          type="text"
          className={`search-bar ${invalid ? "invalid" : ""}`}
          placeholder="Search for any word..."
          max="10"
          value={inputValue}
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
