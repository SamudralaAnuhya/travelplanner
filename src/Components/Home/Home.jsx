import React from "react";
import "./Home.css"
import video from '../../Assets/waterfalls.mp4'
import { GrLocation } from "react-icons/gr";



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
                {/* date */}
                <div className="dateInput">
                    <label htmlFor="date" className="label1">
                        Select your date:  </label>
                    <div className="input flex">
                        <input type = "date"/>
                        </div>
                </div>
                {/* max price */}
                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price" className="label1" > Max price : $5000</label>
                        {/* <h3> 5000</h3> */}
                    </div>
                    <div className="input flex">
                        <input type ="range" max = "5000" min = "1000"/>
                    </div>
                </div>

            </div>
        </div>
        </section>

    )
}




export default Home