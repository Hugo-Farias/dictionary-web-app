import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import DUMMY_DATA from "./data/DUMMY_DATA.json";

const fonts = [
  { id: 0, name: "Sans Serif", cssValue: "Inter" },
  { id: 1, name: "Serif", cssValue: "Lora" },
  { id: 2, name: "Mono", cssValue: "Inconsolata" },
];

const App = function () {
  const [selectedFont, setSelectedFont] = useState<string>(fonts[0].cssValue);

  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <MainContent data={DUMMY_DATA[0]} font={selectedFont} />
    </div>
  );
};

export default App;
