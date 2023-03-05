import "./ThemeSwitch.scss";
import React, { useState } from "react";
import nightIcon from "../assets/images/icon-moon.svg";

const ThemeSwitch = function () {
  const [on, setOn] = useState(true);

  const onClickHandler = function () {
    setOn((prevState) => !prevState);
  };

  return (
    <div className="theme-container">
      <div
        className={`theme-switch ${on ? "" : "off"}`}
        onClick={onClickHandler}
      >
        <div className="lever" />
      </div>
      <img src={nightIcon} alt="night theme icon" />
    </div>
  );
};

export default ThemeSwitch;
