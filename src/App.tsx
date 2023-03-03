import "./App.scss";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";

const App = function () {
  return (
    <div className="app">
      <Navbar />
      <SearchBar />
      <MainContent />
    </div>
  );
};

export default App;
