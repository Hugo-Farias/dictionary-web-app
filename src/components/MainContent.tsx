import "./MainContent.scss";
import { DictionaryData } from "../helpers/typeDefinitions";
import React from "react";
import TitleSection from "./main-content/TitleSection";
import Meanings from "./main-content/Meanings";
import Source from "./main-content/Source";
import Separator from "./utilities/Separator";

type propsT = {
  data: DictionaryData;
  font: string;
};

const MainContent: React.FC<propsT> = function ({ data, font }) {
  const style = {
    fontFamily: font,
  };

  const meaningsJSX = data.meanings.map((value, i) => (
    <Meanings key={i} meanings={value} />
  ));

  return (
    <div className="main-content" style={style}>
      <TitleSection
        word={data.word}
        phonetic={data.phonetic}
        phonetics={data.phonetics}
      />
      {meaningsJSX}
      <Separator size={"100%"} isHorizontal={true} />
      <Source sourceUrls={data.sourceUrls} />
    </div>
  );
};

export default MainContent;
