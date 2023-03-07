import "./ThemeSwitch.scss";
import React from "react";
import nightIcon from "../../assets/images/icon-moon.svg";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../store/slices/mainSlice";
import { getSlice } from "../../helpers/functions";

const ThemeSwitch = function () {
  const on: boolean = getSlice().nightMode;
  const dispatch = useDispatch();

  const onClickHandler = function () {
    dispatch(switchTheme());
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
