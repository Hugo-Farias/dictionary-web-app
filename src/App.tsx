import "./App.scss";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
// import DATA from "./data/DUMMY_DATA.json";
// import DATA from "./data/DUMMY_DATA_ERROR.json";
import { FontT, selectFontsT, selectWordsT } from "./helpers/typeDefinitions";
import NotFound from "./components/main-content/Error/NotFound";
import { useEffect, useState } from "react";
import { getData } from "./helpers/functions";

const App = function () {
  const { currentWord } = useSelector<selectWordsT>((s) => s.words) as {
    currentWord: string;
  };
  const { currentFont } = useSelector<selectFontsT>((state) => state.fonts) as {
    currentFont: FontT;
  };

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const awaitFunc = async function () {
      setApiData(await getData(currentWord));
    };
    awaitFunc();
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
