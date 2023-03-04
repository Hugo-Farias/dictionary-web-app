import "./MainContent.scss";
import { DictionaryData } from "../helpers/typeDefinitions";
import React from "react";
import TitleSection from "./TitleSection";
import Meanings from "./Meanings";

type propsT = {
  data: DictionaryData;
};

const MainContent: React.FC<propsT> = function ({ data }) {
  const meaningsJSX = data.meanings.map((value, i) => (
    <Meanings key={i} meanings={value} />
  ));

  return (
    <div className="main-content">
      <TitleSection
        word={data.word}
        phonetic={data.phonetic}
        phonetics={data.phonetics}
      />
      {meaningsJSX}
    </div>
  );
};

export default MainContent;
