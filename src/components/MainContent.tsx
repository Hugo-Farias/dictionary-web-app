import "./MainContent.scss";
import { DictionaryData } from "../helpers/typeDefinitions";
import Separator from "./Separator";
import playIcon from "../assets/images/icon-play.svg";
import sourceIcon from "../assets/images/icon-new-window.svg";
import React, { useState } from "react";

const MainContent: React.FC<{ data: DictionaryData }> = function ({ data }) {
  const { word, phonetic, phonetics: phoneticsArr } = data;

  console.log(Object.keys(phoneticsArr[0]).length);

  const { audio, sourceUrl }: any = phoneticsArr.find(
    (value) => Object.keys(value).length > 2
  );

  const pronounciation = new Audio(audio);

  const handlePlayButton = function () {
    pronounciation.play().then();
  };

  return (
    <div className="main-content">
      <div className="title-container">
        <div className="title-pronounciation-container">
          <h1 className="title">{data.word}</h1>
          <a href={sourceUrl} target="_blank" className="pronounciation">
            {data.phonetic}
          </a>
        </div>
        <a>
          <img
            src={playIcon}
            alt="Play Pronounciation"
            className="play-audio"
            onClick={handlePlayButton}
          />
        </a>
      </div>
      <div className="verb-container">
        <div className="type-separator-container">
          <h3 className="type">Verb</h3>
        </div>
        <div className="content">
          <h4 className="meaning">Meaning</h4>
          <ul>
            <li>
              <p>To type on a computer keyboard.</p>
              <p className="example">
                "Keyboarding in the part of this job I hate the most."
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Separator
        isHorizontal={true}
        size={"100%"}
        opacity={0.5}
        margin={"2rem 0"}
      />
      <div className="source-container">
        <h5>Source</h5> <a>https://en.wiktionary.org/wiki/keyboard</a>{" "}
        <a>
          <img src={sourceIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainContent;
