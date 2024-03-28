import React from "react";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";
// import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
// import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Map />
      <List />
      {/* <PlaceDetails /> */}
      {/* <Footer/>   */}
    </>
  );
};

export default App;
