import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
          <FontAwesomeIcon icon={faRoute} /> {/* FontAwesomeIcon */}
          <span></span>
            <h1 class> Travel Planner</h1>
          </a>
        </div>
        <div className="navLinks">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className={`navLink ${activeItem === "Home" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("Home")} >
                <FontAwesomeIcon icon={faHouseUser} />
                <span></span>
                Home
              </a>
            </li>
            
            <li className="navItem">
              <a
                href="#"
                className={`navLink ${activeItem === "About" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("About")}
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="#"
                className={`navLink ${activeItem === "Everything" ? "activeNavItem" : ""}`}
                onClick={() => handleItemClick("Everything")}
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;