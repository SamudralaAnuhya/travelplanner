import axios from "axios";

const URL = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants'

const options = {
  params: {
    locationId: '304554'
  },
  headers: {
    'X-RapidAPI-Key': 'd485646128msh2360aa2a3bb58c6p1305d9jsn11739ee12692',
    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
  }
};

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

 

export const getPlacesData = async () => {
    try {
        const { data : { data } } = await axios.get( URL , options)
        return data;

    }catch (error){
        console.log(error)

    }
}                   

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng`, {
//       params: {
//         bl_latitude: sw.lat,
//         bl_longitude: sw.lng,
//         tr_longitude: ne.lng,
//         tr_latitude: ne.lat,
//       },
//       headers: {
//         'X-RapidAPI-Key': 'd485646128msh2360aa2a3bb58c6p1305d9jsn11739ee12692',
//         'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getWeatherData = async (lat, lng) => {
//   try {
//     if (lat && lng) {
//       const { data } = await axios.get('https://weather-forecast-map-tiles.p.rapidapi.com/tile/7/68/44', {
//         params: { lat, lon: lng },
//         headers: {
//         'X-RapidAPI-Key': 'd485646128msh2360aa2a3bb58c6p1305d9jsn11739ee12692',
//         'X-RapidAPI-Host': 'weather-forecast-map-tiles.p.rapidapi.com'
//         },
//       });

//       return data;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };