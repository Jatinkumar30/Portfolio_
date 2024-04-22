import React from "react";
import "./project.css";

import p1 from "../../assests/tally.gif";
import p2 from "../../assests/shazam.gif";
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
          <a href="https://github.com/Jatinkumar30/tally">Tally Counter</a>

          <p>
            Tally-CounterTally-Counter Jun 2023 - PresentJun 2023 - Present This
            tally counter is a software device used to incrementally count
            something, typically fleeting. One of the most common things tally
            counters are used for is counting people, animals. Technology used :
            ReactJs , JSX. Backend : Firebase
          </p>

          <ul>
            {" "}
            <li>React</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Node</li>
            <li>Netlify</li>
          </ul>

          <div className="project-social">
            <a
              href="https://github.com/Jatinkumar30/tally"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/Jatinkumar30/tally"
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
            Shazam Music Player
          </a>

          <p>
            This music app is built with React, Redux(with toolkit) and Tailwind
            CSS is a powerful tool for music lovers. It uses Shazam API React
            Router for smooth navigation ex- tensive library of songs, albums
            artists. Enjoy your favorite tunes on the go with this sleek
            advanced app.
          </p>

          <ul>
            <li>React</li>
            <li>Express</li>
            <li>Node</li>
            <li>JavaScript</li>
          </ul>

          <div className="project2-social">
            <a
              href="https://github.com/Jatinkumar30/shazam-app"
              aria-label="github link"
              target="blank"
            >
              <Github />
            </a>
            <a
              href="https://github.com/Jatinkumar30/shazam-app"
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

      <div className="project3 project3">
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