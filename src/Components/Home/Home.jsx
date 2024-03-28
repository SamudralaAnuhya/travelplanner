import React from "react";
import "./Home.css"
import video from '../../Assets/waterfalls.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";





const Home = () => {
    return(
        <section className = 'home'> 
        <div className="overLay"></div>
        <video src ={video} muted autoPlay loop type = "video/>mp4"> </video>

        <div className="homeContent container">
            <div className="textDiv">

                <span className="smallText">
                   Our Packages
                </span>

                <h1 className="homeTitle">
                    Search your Holiday
                </h1>

            </div>

            <div className="cardDiv grid">
                {/* destination */}
                <div className="destinationInput">
                    <label htmlFor="city" className="label1">
                        Search your destination:  </label>
                    <div className="input flex">
                        <input type = "text" placeholder="Enter name here...."/>
                            <GrLocation className="icon" />
                        </div>
                </div>
                </div>
                {/* More Filters Button */}
                <div className="searchOptions flex"> 
                    <HiFilter className="icon" />
                    <span>MORE FILTERS</span>
                </div>
            </div>

            <div className="homeFooterIcons flex">
                <div className="rightIcons">
                    <TfiFacebook  className="icon"/>
                    <FaInstagram  className="icon"/>
                    <TbBrandTripadvisor  className="icon"/>
                </div>

                <div className="leftIcons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon"/>
                   
                </div>

            </div>

        </section>

    )
}




export default Home