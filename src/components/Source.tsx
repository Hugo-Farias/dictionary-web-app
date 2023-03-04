import "./Source.scss";
import sourceIcon from "../assets/images/icon-new-window.svg";
import React from "react";

const Source = function () {
  return (
    <div className="source-container">
      <h5>Source</h5> <a>https://en.wiktionary.org/wiki/keyboard</a>{" "}
      <a>
        <img src={sourceIcon} alt="" />
      </a>
    </div>
  );
};

export default Source;
