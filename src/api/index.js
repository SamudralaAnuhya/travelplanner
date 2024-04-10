import axios from "axios";
// import data from "../Assets/hoteldata_clt.json"

const url  = 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates'

 

export const getPlacesData = async (sw,ne) => {
    try {
        const { data : { data } } = await axios.get( url ,{
            params: {
              
              latitude: sw.lat,
              longitude: ne.lng,
              arrival_date: '2024-04-18',
              departure_date: '2024-04-24',
            },
            headers: {
              'X-RapidAPI-Key': 'd40bfd0e8amsh514fffb4597b9d7p155edfjsn7f83155fc0c8',
              'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        });
        
        return data;

    }catch (error){
        console.log(error)

    }
}                 







             

