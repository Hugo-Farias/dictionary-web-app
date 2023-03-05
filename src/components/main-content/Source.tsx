import React from "react";
import "./Source.scss";
import sourceIcon from "../../assets/images/icon-new-window.svg";

interface propsT {
  sourceUrls: string[];
}

const Source: React.FC<propsT> = function ({ sourceUrls }) {
  const link = sourceUrls[0];

  return (
    <div className="source-container">
      <h5>Source</h5>
      <a href={link} target="_blank">
        {link}
      </a>
      <a href={link} target="_blank">
        <img src={sourceIcon} alt="" />
      </a>
    </div>
  );
};

export default Source;
