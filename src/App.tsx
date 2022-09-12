import React from "react";
import "./App.css";
// import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/side-bar/Sidebar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Nav />
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
