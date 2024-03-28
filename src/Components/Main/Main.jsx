import React from "react";
import "./Main.css"
import video from '../../Assets/waterfalls.mp4'


//icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

//image
import img from '../../Assets/img1.png'
import img1 from '../../Assets/ashville.jpeg'
import img2 from '../../Assets/charleston.jpeg'
import img3 from '../../Assets/Myrtle-Beach-Boardwalk.jpg'
import img4 from '../../Assets/adirondack park.jpeg'
import img5 from '../../Assets/rayleigh.jpeg'
import img6 from '../../Assets/Niagara-Falls.webp'
import img7 from '../../Assets/blue ridge.jpeg'
import img8 from '../../Assets/new-york-statue-of-liberty_2x1.avif'
import img9 from '../../Assets/hudson.jpeg'
import img10 from '../../Assets/hilton head island.jpeg'
import img11 from '../../Assets/Niagara-Falls.webp'


//as of now giving same oim,age to all change afterwords 
// import img2 from '../../Assets/img1.png'



const Data = [
    
    {
        id: 1,
        imgSrc: img5,  //imgSrc: img2,
        destTitle: 'Raleigh',
        location: 'North Carolina, USA',
        grade: 'City Adventurer',
        fees: '$200',
        description: 'Experience the vibrant cultural scene, historic sites, and bustling food scene in the capital city of North Carolina.'
    },
  
    {
        id: 3,
        imgSrc: img2,
        destTitle: 'Charleston',
        location: 'South Carolina, USA',
        grade: 'City Adventurer',
        fees: '$180',
        description: 'Step back in time and explore the rich history, antebellum architecture, and charming streets of Charleston.'
    },
    {
        id: 4,
        imgSrc: img1,
        destTitle: 'Asheville',
        location: 'North Carolina, USA',
        grade: 'City Adventurer',
        fees: '$150',
        description: 'Immerse yourself in a vibrant arts scene, craft breweries, and stunning mountain scenery in the eclectic city of Asheville.'
    },
    {
        id: 5,
        imgSrc: img4,
        destTitle: 'Adirondack Park',
        location: 'New York, USA',
        grade: 'Nature Explorer',
        fees: '$300',
        description: 'Discover endless outdoor adventures including hiking, skiing, and kayaking in the largest protected area in the contiguous United States.'
    },
    {
        id: 6,
        imgSrc: img3,
        destTitle: 'Myrtle Beach',
        location: 'South Carolina, USA',
        grade: 'Beach Lover',
        fees: '$250',
        description: 'Enjoy sun, sand, and surf on the Grand Strand with pristine beaches, golf courses, and family-friendly attractions.'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Blue Ridge Mountains',
        location: 'North Carolina, USA',
        grade: 'Nature Explorer',
        fees: '$180',
        description: 'Experience stunning panoramic views, hiking trails, and charming mountain communities in the picturesque Blue Ridge Mountains.'
    },
    {
        id: 1,
        imgSrc: img11,
        destTitle: 'Niagara Falls',
        location: 'New York, USA',
        grade: 'Nature Explorer',
        fees: '$250',
        description: 'Iconic cascading waterfalls straddling the border of Canada and the United States, captivating visitors with their breathtaking beauty.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'New York City',
        location: 'New York, USA',
        grade: 'City Adventurer',
        fees: '$400',
        description: 'Immerse yourself in the vibrant energy, iconic landmarks, and diverse culture of the city that never sleeps.'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Hudson River Valley',
        location: 'New York, USA',
        grade: 'Nature Explorer',
        fees: '$200',
        description: 'Explore charming towns, historic sites, and scenic landscapes along the majestic Hudson River in upstate New York.'
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Hilton Head Island',
        location: 'South Carolina, USA',
        grade: 'Beach Lover',
        fees: '$300',
        description: 'Unwind on pristine beaches, play world-class golf, and indulge in luxury resorts on the idyllic Hilton Head Island.'
    }
    ];
  
  
  console.log(Data);


const Main = () => {
    return(
        <section className="main container section">

            <div className="secTitle">
                <h3 className="title">Most visited Destinations</h3>
            </div>

            <div className="secContent grid">  
            {/* high order array to fetch most visited destination  */}

                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return(
                            <div key={id} className="singleDestination">

                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle} </h4>
                                    <span className="conTinent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>

                                        <div className="price">
                                            <h3> {fees}</h3>
                                        </div>
                                    </div>

                                     <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS <HiOutlineClipboardCheck className="icon" />
                                    </button>   

                                </div>
                            </div>  
                        )
                    })

                }
            </div>
        </section>
    )
}

export default Main