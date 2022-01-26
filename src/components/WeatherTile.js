import {useState} from 'react';

function WeatherTile(props){
    return(
        <div className='weatherComponent'>
            <h1>Day {props.dayNum}</h1>
            <p>Temp: {props.temp}</p>
        </div>
    )
}

export default WeatherTile;