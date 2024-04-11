import React, { useEffect, useState } from "react";
// import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from "./api";

import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import Header from "./Components/Header/Header";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
// import Footer from "./Components/Footer/Footer";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  console.log("Places:", places);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const [apiCallCount, setApiCallCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // const [type, setType] = useState("hotels"); //write as hotels
  const [rating, setRating] = useState("");

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    };
    getLocation();
  }, []);

// useEffect(() => {
//   const filteredPlaces = places.filter((place) => place.review_score > rating)
//   setFilteredPlaces(filteredPlaces); 
// },[rating]);


useEffect(() => {
  let placesArray = [];
  if (Array.isArray(places)) {
    placesArray = places;
  } else if (places && places.result) {
    placesArray = places.result;
  }
  const filteredPlaces = placesArray.filter((place) => place.review_score > rating);
  setFilteredPlaces(filteredPlaces);
}, [places, rating]);


  useEffect(() => {
    if (bounds && apiCallCount < 1) {
      console.log("Bounds data:", bounds);
      console.log("Southwest coordinates:", bounds.sw);
      console.log("Northeast coordinates:", bounds.ne);
      setIsLoading(true);

      getPlacesData(  bounds.sw, bounds.ne).then((data) => {
        console.log("Fetched places data:", data);
        setPlaces(data);
        setFilteredPlaces([]);
        setIsLoading(false);
      });
      setApiCallCount((prevCount) => prevCount + 1);
    }
  }, [coordinates, bounds]);

  return (
    <>
      <Navbar />
      <Home />
      <Main />
      {/* <PlaceDetails /> */}
      {/* <Footer/>   */}
      <>
        <CssBaseline />
        <Header setCoordinates = {setCoordinates}/>
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12} md={4}>
            {console.log(places)}
            <List
              places={ filteredPlaces .length ? filteredPlaces : places}
              ChildClicked={childClicked}
              isLoading={isLoading}
              // type = {type}
              rating ={rating}
              // setType={setType}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces .length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default App;
