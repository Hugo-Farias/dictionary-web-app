import "./MainContent.scss";
import { DictionaryData } from "../helpers/typeDefinitions";
import React from "react";
import TitleSection from "./TitleSection";

const MainContent: React.FC<{ data: DictionaryData }> = function ({ data }) {
  return (
    <div className="main-content">
      <TitleSection
        word={data.word}
        phonetic={data.phonetic}
        phonetics={data.phonetics}
      />
    </div>
  );
};

export default MainContent;
