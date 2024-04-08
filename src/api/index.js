import axios from "axios";
import data from "../Assets/hoteldata.json"

const url  = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates'


// const axios = require('axios');

const options = {

  params: {
    latitude: '19.24232736426361',
    longitude: '72.85841985686734',
    arrival_date: '2024-04-18',
    departure_date: '2024-04-24',
  },
  headers: {
    'X-RapidAPI-Key': 'be09b25eaamsh15b5bd7aff256e8p1a4e0bjsne250fdaa68d5',
    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
  }
};


 

export const getPlacesData = async () => {
    try {
        // const { data : { data } } = await axios.get( url , options);
        
        return data;

    }catch (error){
        console.log(error)

    }
}                   
