import "./MainContent.scss";
import { DictionaryData } from "../helpers/typeDefinitions";
import React from "react";
import TitleSection from "./TitleSection";
import Meanings from "./Meanings";

const MainContent: React.FC<{ data: DictionaryData }> = function ({ data }) {
  return (
    <div className="main-content">
      <TitleSection
        word={data.word}
        phonetic={data.phonetic}
        phonetics={data.phonetics}
      />
      <Meanings meanings={data.meanings[0]} />
    </div>
  );
};

export default MainContent;
