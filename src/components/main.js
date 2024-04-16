import React from "react";
import Header from "./header";
import HeroSection from "./hero/hero";


import "../App.css";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <HeroSection /> 
      </div>
    </div>
  );
};

export default Main;