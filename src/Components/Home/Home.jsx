import React from "react";
import "./Home.css";
import video from "../../Assets/waterfalls.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

const Home = ({ searchValue, onSearchChange, onSearchTrigger }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearchTrigger();
    }
  };

  return (
    <section className="home">
      <div className="overLay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holiday</h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city" className="label1">
              Search your destination:
            </label>
            <div className="input flex">
              <input
                type="text"
                placeholder="Enter name here...."
                value={searchValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <GrLocation className="icon" onClick={onSearchTrigger} />
            </div>
          </div>
        </div>
        <div className="searchOptions flex">
          <HiFilter className="icon" />
          <span>MORE FILTERS</span>
        </div>
      </div>
      <div className="homeFooterIcons flex">
        <div className="rightIcons">
          <TfiFacebook className="icon" />
          <FaInstagram className="icon" />
          <TbBrandTripadvisor className="icon" />
        </div>
        <div className="leftIcons">
          <BsListTask className="icon" />
          <TbApps className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Home;