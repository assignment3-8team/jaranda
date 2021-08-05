import "./App.css";
import Header from "components/Header";
import MenuList from "components/MenuList";
import Routes from "./Router";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-wrap">
        <div className="main-content">
          <MenuList />
          <div className="page-wrap">
            <Routes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
