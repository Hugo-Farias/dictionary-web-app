import "./Meanings.scss";
import { meaningsT } from "../../helpers/typeDefinitions";
import Separator from "../utilities/Separator";
import React from "react";
import MeaningsNyms from "./MeaningsNyms";
import MeaningsExample from "./MeaningsExample";

const Meanings: React.FC<meaningsT> = function ({ meanings }) {
  const { partOfSpeech, definitions, synonyms, antonyms } = meanings;

  const definitionJSX = definitions.map((v, i) => (
    <li key={i}>
      {v.definition}
      {<MeaningsExample example={v.example} />}
    </li>
  ));

  return (
    <div className="meanings">
      <div className="type-separator-container">
        <h3>{partOfSpeech}</h3>
        <Separator
          isHorizontal={true}
          size={"100%"}
          opacity={0.5}
          margin={"5.4rem 0"}
        />
      </div>

      <div className="defintions">
        <h4 className="meaning">Meaning</h4>
        <ul>{definitionJSX}</ul>
      </div>
      <MeaningsNyms name={"Synonyms"} list={synonyms} />
      <MeaningsNyms name={"Antonyms"} list={antonyms} />
    </div>
  );
};

export default Meanings;
