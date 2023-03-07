import "./ThemeSwitch.scss";
import React, { useState } from "react";
import nightIcon from "../../assets/images/icon-moon.svg";

const ThemeSwitch = function () {
  const [on, setOn] = useState(true);

  const onClickHandler = function () {
    setOn((prevState) => !prevState);
  };

  return (
    <a className="theme-container" onClick={onClickHandler}>
      <div className={`theme-switch ${on ? "" : "off"}`}>
        <div className="lever" />
      </div>
      <img src={nightIcon} alt="night theme icon" />
    </a>
  );
};

export default ThemeSwitch;
