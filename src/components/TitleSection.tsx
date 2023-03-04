import "./TitleSection.scss";
import playIcon from "../assets/images/icon-play.svg";
import React from "react";

interface propsT {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name: string;
      url: string;
    };
  }[];
}

const TitleSection: React.FC<propsT> = function (props) {
  const { word, phonetic, phonetics: phoneticsArr } = props;

  const audio: HTMLAudioElement | void = new Audio(
    phoneticsArr.find((v) => v?.audio)?.audio
  );

  const handlePlayButton = function () {
    if (!audio) return;
    audio.play().then();
  };

  return (
    <div className="title-container">
      <div className="title-pronounciation-container">
        <h1 className="title">{word}</h1>
        <a href="" target="_blank" className="pronounciation">
          {phonetic}
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
  );
};

export default TitleSection;
