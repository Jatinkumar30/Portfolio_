import React, {useEffect, useState} from "react";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [openMenu, setOpenMenu] =  useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleNavigationClick = (event , sectionId) => {
        event.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
          setOpenMenu(false); // Close the menu when scrolling
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      return (
        <div className="nav">
            <ol className="nav-right">
                <li>
                    <a
                    className="navbar-link" 
                    onClick={(e) => handleNavigationClick(e, "about")}
                    href="">About</a>
                </li>
                <li>
                    <a
                    className="navbar-link" 
                    onClick={(e) => handleNavigationClick(e, "skills")}
                    href="">skills</a>
                </li>
                <li>
                    <a
                    className="navbar-link" 
                    onClick={(e) => handleNavigationClick(e, "project")}
                    href="">project</a>
                </li>
                <li>
                    <a
                    className="navbar-link" 
                    onClick={(e) => handleNavigationClick(e, "contact")}
                    href="">contact</a>
                </li>
                <a href="https://drive.google.com/file/d/1ek4rHZeVarkhwKAQtu4NtdSWPoXbkC9c/view?usp=drive_link" className="resume-link">resume</a>
            </ol>

            <div className="mobile-navbar-btn">
        <FontAwesomeIcon
          icon={faBars}
          name="menu-outline"
          className="mobile-navbar-icon menu-outline"
          onClick={toggleMenu}
        />
        <FontAwesomeIcon
          icon={faTimes}
          name="close-outline"
          className="close-outline mobile-navbar-icon"
          onClick={toggleMenu}
        />
      </div>

        </div>
      )
};

export default Navbar;