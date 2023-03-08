import "./TitleSection.scss";
import playIcon from "../../assets/images/icon-play.svg";
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
  const { word, phonetic, phonetics } = props;

  let style: { fontSize: string } = { fontSize: "6.4rem" };

  // Give words with a lot of characters smaller font sizes dynamically
  if (word.length >= 17) {
    style = {
      fontSize: `${110 / word.length}rem`,
    };
  }

  const phoneticsData = phonetics.find((v) => Object.keys(v).length > 2);

  const audio: HTMLAudioElement | void = new Audio(phoneticsData?.audio);

  const handlePlayButton = function () {
    if (!audio) return;
    audio.play().then();
  };

  return (
    <div className="title-container">
      <div className="title-pronounciation-container">
        <h1 className="title" style={style}>
          {word}
        </h1>
        <span className="pronounciation">{phonetic}</span>
      </div>
      {phoneticsData?.audio ? (
        <a>
          <img
            src={playIcon}
            alt="Play Pronounciation"
            className="play-audio"
            onClick={handlePlayButton}
          />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default TitleSection;
