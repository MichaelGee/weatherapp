import React from 'react'

const Weather =(props)=> (
    <div>
        {props.city && <p>Location: {props.city}</p>}<br/>
        {props.temprature &&  <p>Temprature: {props.temprature}</p>}<br/>
        {props.humidity && <p>Humidity: {props.humidity}</p>}<br/>
        {props.description && <p>Description: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
      </div>
);




export default Weather;
