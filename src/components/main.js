import React from "react";
import Header from "./header";
import HeroSection from "./hero/hero";
import About from "./about/about"


import "../App.css";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <HeroSection /> 
        <About />
      </div>
    </div>
  );
};

export default Main;