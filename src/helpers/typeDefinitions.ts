import { sliceT } from "../store/slices/mainSlice";

export interface DictionaryData {
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
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}

export interface DictDataError {
  title: string;
  message: string;
  resolution: string;
}

export interface meaningsT {
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
      antonyms: string[];
      example?: string;
    }[];
    synonyms: string[];
    antonyms: string[];
  };
}

export interface FontT {
  id: number;
  name: string;
  cssValue: string;
}

export interface selectT {
  main: sliceT;
}
