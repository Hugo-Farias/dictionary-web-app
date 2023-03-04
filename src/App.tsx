import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import DUMMY_DATA from "./data/DUMMY_DATA.json";

const App = function () {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <MainContent data={DUMMY_DATA[0]} />
    </div>
  );
};

export default App;
