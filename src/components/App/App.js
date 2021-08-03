import "./style.css";
import Header from "components/Header";
import MenuList from "components/MenuList";
import Router from "utils/router/router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <MenuList />
        <div className="page-wrap">
          <Router />
        </div>
      </div>
    </div>
  );
}

export default App;
