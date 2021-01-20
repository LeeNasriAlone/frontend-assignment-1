import React from 'react';
import TripBox from './TripBox';

const TripList = (props) => {
    return (
        <>
            {props.trips.map( (trip, index) => (
                <TripBox trip={trip} setSearchValue={props.setSearchValue}/>
            ))}
        </>
    );
};

export default TripList;