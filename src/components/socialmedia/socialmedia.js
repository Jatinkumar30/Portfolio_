import React from "react";
import "./socialmedia.css";
import Github from "../icons/Github";
import LeetCode from "../icons/Leetcode";
import LinkedIn from "../icons/Linkedin";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";

const SocialMedia = () => {
    return (
      <div className="social-icon">
        <ul className="social">
          <li>
            <a href="https://github.com/jatinkumar30" target="blank">
              <Github />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/user7877FT/" target="blank">
              <LeetCode />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jatin-kumar-84612112b/"
              target="blank"
            >
              <LinkedIn />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jatinrawal30" target="blank">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_me_jatin__/" target="blank">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default SocialMedia;
  