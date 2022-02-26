import './App.css';
import WeatherTile from './Components/WeatherTile';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import React, { useState, useEffect } from 'react';

let coordinates = {
  lat: 24.614162,
  lng: 67.082216,
}

function App() {
  const [weatherArr, setWeatherArr] = useState();

  // Note: This function will call api...!
  const callApi = async () => {

    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&appid=4fcd41771cc91187db1651ddcc10916f`;

    try {
      let response = await axios(
        {
          method: "GET",
          url: api
        }
      );

      if (response.status == 200) {
        let data = response.data.daily;
        setWeatherArr(data);
        console.log(data);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  // Note: When this component rendered successfully then this hook will run and call the api...!
  useEffect(
    () => callApi(),
    []);

  return (
    <React.Fragment>
      <div className="container">
        <h3>Dynamic Weather App</h3>
        <h6>By Elina and Aun</h6>
      {
        // weather tile in table format
        weatherArr && weatherArr.map((item, index) => {
          return (
            <WeatherTile
              dayNum={index + 1}
              temp={item.temp.day}
              min={item.temp.min}
              max={item.temp.max}
              key={index}
            />
          )
        })
      }
      </div>
    </React.Fragment>
  )
}

export default App;
