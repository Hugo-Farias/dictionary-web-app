import "./App.scss";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import DATA from "./data/DUMMY_DATA.json";
// import DATA from "./data/DUMMY_DATA_ERROR.json";
import { FontT, selectT } from "./helpers/typeDefinitions";
import NotFound from "./components/main-content/Error/NotFound";

const App = function () {
  const { currentFont } = useSelector<selectT>((state) => state.fonts) as {
    currentFont: FontT;
  };

  const font = currentFont?.cssValue;

  const contentOrError = Array.isArray(DATA) ? (
    <MainContent data={DATA[0]} font={font} />
  ) : (
    <NotFound data={DATA} />
  );

  return (
    <div className="app">
      <Navbar />
      <SearchBar font={font} />
      {contentOrError}
    </div>
  );
};

export default App;
