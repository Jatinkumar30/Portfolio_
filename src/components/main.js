import React from "react";
import Header from "./header";
import SocialMedia from "./socialmedia/socialmedia";
import HeroSection from "./hero/hero";
import About from "./about/about"


import "../App.css";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <div className="main">
        <HeroSection /> 
        <About />
      </div>
    </div>
  );
};

export default Main;