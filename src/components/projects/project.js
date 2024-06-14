import React from "react";
import "./project.css";

import p1 from "../../assests/Trendz.gif";
import p2 from "../../assests/motionart.gif";
import p3 from "../../assests/DealBazar.gif";

import Github from "../icons/Github";
import ExternalLink from "../icons/ExternalLink";
const Project = () => {
  return (
    <div className="projects" id="project">
      <h2 className="project-heading">Some Projecs I've built</h2>

      <div className="project1">
        <a
          href="https://64aec91f374524118cced315--funny-naiad-590d2b.netlify.app/"
          className="project1-left"
          target="blank"
        >
          <div className="project1-image">
            <img src={p1} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>

        <div className="project1-right">
          <h5>Featured Project</h5>
          <a href="https://github.com/Jatinkumar30/tally">Trends4you</a>

          <p>
          • Developed a user-friendly E-commerce Fashion Clothing website using the MERN stack.
          • Enabled a NodeJS backend and ReactJS frontend for a seamless experience. Designed for high
            scalability and efficiency, providing an intuitive shopping experience for men, women, and kids.
          </p>

          <ul>
            {" "}
            <li>ReactJS</li>
            <li>Javascript</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>NodeJS</li>
          </ul>

          <div className="project-social">
            <a
              href="https://github.com/Jatinkumar30/Trends4you"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/Jatinkumar30/Trends4you"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>

      {/* project2  */}
      <div className="project2">
        <div className="project2-left description">
          <h5>Featured Project</h5>
          <a href="https://github.com/Jatinkumar30/shazam-app">
          Motion-art-Effect 
          </a>

          <p>
          • Developed an innovative project using WebFluid WebGL, similar to Motion Art Elementor.
          • Collaborated on creating fluid animations and responsive designs, enhancing user engagement and
            experience. Designed for optimal scalability and modern web standards compliance.
          </p>

          <ul>
            <li>ReactJS</li>
            <li>Javascript</li>
            <li>WebGL</li>
            <li>SCSS + CSS</li>
          </ul>

          <div className="project2-social">
            <a
              href="https://github.com/Jatinkumar30/MotionArt-Effect-main"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://motion-art-effect-main.vercel.app/"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
        <a
          className="project2-right image"
          href="https://github.com/Jatinkumar30/shazam-app"
          target="blank"
        >
          <div className="project2-image">
            <img src={p2} alt="" />
            <div className="project2filter"></div>
          </div>
        </a>
      </div>

      {/* project3 */}

      <div className="project1 project3">
        <a
          className="project1-left "
          href="https://ecommerce199.netlify.app/"
          target="blank"
        >
          <div className="project1-image">
            <img src={p3} alt="" />
            <div className="project1filter"></div>
          </div>
        </a>
        <div className="project1-right ">
          <h5>Featured Project</h5>
          <a href="https://github.com/Jatinkumar30/DealBazaar">
            DealBazaar
          </a>

          <p>
            Developed user-friendly E-Commerce Full Stack website DealBazaar with MERN
            STACK, enabling NodeJS backend and React frontend. Collaborated with the team for optimized design
            and high-level scalability
          </p>

          <ul>
            <li>Reactjs</li>
            <li>Reduxjs</li>
            <li>Nodejs</li>
            <li>JavaScript</li>
          </ul>

          <div className="project-social">
            <a
              href="https://github.com/Jatinkumar30/DealBazaar"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/Jatinkumar30/DealBazaar"
              aria-label="external link"
              target="blank"
            >
              <ExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;