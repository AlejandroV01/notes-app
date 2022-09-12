import React from "react";
import "./App.css";
import styles from "./App.module.css";
// import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/side-bar/Sidebar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Nav />
      <div className={styles.navAndHome}>
        {/* <Sidebar /> */}
        <Home />
      </div>
    </>
  );
}

export default App;
