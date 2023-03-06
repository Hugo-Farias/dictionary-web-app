import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import NotFound from "./components/main-content/Error/NotFound";
import { useEffect, useState } from "react";
import { getCurrentFont, getCurrentWord, getData } from "./helpers/functions";
// import DATA from "./data/DUMMY_DATA.json";
// import DATA from "./data/DUMMY_DATA_ERROR.json";

const App = function () {
  const currentWord = getCurrentWord();
  const { currentFont } = getCurrentFont();

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const awaitFunc = async function () {
      setApiData(await getData(currentWord));
    };
    awaitFunc();

    console.log("useEffect=> " + currentWord);
  }, [currentWord]);

  const font = currentFont?.cssValue;

  let contentOrError: any = "";

  if (apiData && Array.isArray(apiData)) {
    contentOrError = <MainContent data={apiData[0]} font={font} />;
  } else if (apiData) {
    contentOrError = <NotFound data={apiData} />;
  }

  return (
    <div className="app">
      <Navbar />
      <SearchBar font={font} />
      {contentOrError}
    </div>
  );
};

export default App;
