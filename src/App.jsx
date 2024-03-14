import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Clients from "./components/Clients";
import Body from "./components/Body";
import Caring from "./components/Caring";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Clients />
      <Body />
      <Caring />
      <Footer />
    </div>
  );
};

export default App;
