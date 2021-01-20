import React, { useState, useEffect } from 'react';
import './App.css';

// import components
import SearchBox from "./components/SearchBox"
import TripList from "./components/TripList"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [trips, setTrips] = useState([]);

  const getTripsRequest = async (searchValue) => {
    let url = `http://localhost:9000/trips?_sort=likes&_order=desc`;
    if (searchValue){
      url += `&q=${searchValue}`;
    }
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson) {setTrips(responseJson); }
  };


  useEffect( () => {
    getTripsRequest(searchValue)
  }, [searchValue])

  console.log(trips);

  return (
    <div className="whole-page">
      <h1 className="app-heading">เที่ยวไหนดี</h1>
      <SearchBox placeHolder="หาที่เที่ยวแล้วไปกัน..." searchValue={searchValue} setSearchValue={setSearchValue}/>
      
      <div className="trip-list">
        <div className="trip-list-center-box">
          <TripList trips={trips} setSearchValue={setSearchValue}/>
        </div>
      </div>
    </div>
  );
}

export default App;
