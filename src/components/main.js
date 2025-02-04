import React from "react";
import Header from "./header";
import SocialMedia from "./socialmedia/socialmedia";
import HeroSection from "./hero/hero";
import About from "./about/about"
import Footer from "./footer/footer"
import Contact from "./contact/contact"
import Email from "./email/email"
import Skills from "./skills/skills"
import Project from "./projects/project"

import "../App.css";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <SocialMedia />
      <Email />
      <div className="main">
        <HeroSection /> 
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;