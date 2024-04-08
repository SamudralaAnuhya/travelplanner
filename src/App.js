import React , {useEffect, useState} from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData  } from './api';

import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
// import Footer from "./Components/Footer/Footer";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null)
   
    
    // useEffect(() =>{
    //   navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //     setCoordinates({ lat: latitude, lng: longitude });
    //   });
    // }, []);

    useEffect(() => {
      const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoordinates({ lat: position.coords.latitude, lng: position.coords.longitude });
          },
          (error) => {
            console.error('Error getting geolocation:', error);
          }
        );
      };


      getLocation();
    }, []);
    
    
    useEffect( ()=>{
        console.log(coordinates,bounds); 
       
        getPlacesData()
        .then( (data) => {
            console.log(data);
            setPlaces(data)
        });    
    },[coordinates , bounds]);


  return (
    <>
      <Navbar />
      <Home />
      <Main />
      {/* <PlaceDetails /> */}
      {/* <Footer/>   */}
    <> 
        <CssBaseline />
        <Header />
        <Grid container spacing={3} style={{ width: "100%" }}>
            <Grid item xs={12} md={4}>
                 <List />
            </Grid>
            <Grid item xs={12} md={8}>
                <Map 
                setCoordinates ={setCoordinates}
                setBounds ={setBounds}
                coordinates ={coordinates}/>

            </Grid>
        </Grid>
    </>
    </>
   
  
  );
};

export default App;
