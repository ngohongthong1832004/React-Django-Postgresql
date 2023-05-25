// import classNames from "classnames/bind";

// import styles from  "./app.module.scss";
import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import Content from "./content";
import TestRootPage from "./components/test";
// import TestRootPage from "./components/test";
// const cx = classNames.bind(styles);


function App() {

  return (
    <>
      <Header />

      <Search />

      <Content />

      {/* <TestRootPage /> */}
    </>
  );
}

export default App;
