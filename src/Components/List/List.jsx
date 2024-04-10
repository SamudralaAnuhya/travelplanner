import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from "./styles";


// // const List = ({ }) => {
//     // const places = [
//     //     {name : 'asd'},
//     //     {name : 'awdsd'},
//     //     {name : 'adesd'}

//     // ];


const List = ({ places, ChildClicked, isLoading }) => {
    const classes = useStyles();
    const [type, setType] = useState('hotels'); //write as hotels
    const [rating, setRating] = useState('');
    const [elRefs, setElRefs] = useState([]);

    // console.log({ChildClicked});
    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    let placesArray = [];
    console.log("initial places prop ", places);


    // Check if places is an array
    if (Array.isArray(places)) {
        placesArray = places;
        console.log("placesArray (from array):", placesArray);
    }
    // Check if places is an object with a result property
    else if (places && places.result) {
        placesArray = places.result;
        console.log("placesArray (from object):", placesArray);
    }

    console.log("finel places array ", placesArray)

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants , Hotels & Attractions around you </Typography>\
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem MenuItem value="hotels">Hotels</MenuItem>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="attractions">Attractions</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>All</MenuItem>
                            <MenuItem value={3}>Above 3.0</MenuItem>
                            <MenuItem value={4}>Above 4.0</MenuItem>
                            <MenuItem value={4.5}>Above 4.5</MenuItem>
                        </Select>
                    </FormControl>


                    <Grid container spacing={3} className={classes.list}>
                        {Array.isArray(placesArray) && placesArray.map((place, i) => (
                            // <Grid item key={i} xs={12}>
                            //     <PlaceDetails place={place} />
                            // </Grid>
                            <Grid ref={elRefs[i]} key={i} item xs={12}>
                                <PlaceDetails
                                    selected={Number(ChildClicked) === i}
                                    refProp={elRefs[i]}
                                    place={place} />
                            </Grid>
                        ))}

                    </Grid>
                </>
            )}
        </div>
    );
}
export default List;









