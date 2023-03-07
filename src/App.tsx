import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import NotFound from "./components/main-content/Error/NotFound";
import { useEffect, useState } from "react";
import { getSlice, getCurrentWord, getData } from "./helpers/functions";
import { DictDataError } from "./helpers/typeDefinitions";

const App = function () {
  const currentWord: string = getCurrentWord();
  const { currentFont, nightMode } = getSlice();
  const [apiData, setApiData] = useState<DictDataError | null>(null);

  useEffect(() => {
    getData(currentWord)
      .then((v) => {
        setApiData(v);
      })
      .then(() => window.scrollTo(0, 0));
  }, [currentWord]);

  const font = currentFont?.cssValue;

  let contentOrError: any = "";

  if (apiData && Array.isArray(apiData)) {
    contentOrError = <MainContent data={apiData[0]} font={font} />;
  } else if (apiData) {
    contentOrError = <NotFound data={apiData} />;
  }

  return (
    <div className={`app ${nightMode ? "" : "light"}`}>
      <Navbar />
      <SearchBar font={font} />
      {contentOrError}
    </div>
  );
};

export default App;
