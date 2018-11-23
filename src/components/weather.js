import React from 'react'

const Weather =(props)=> (
    <div className="weather">

        <div className="row align-items-center justify-content-center">
            {props.city && <div className="card">
            <ul className="list-group list-group-flush">
            {props.city && <li className="list-group-item"><p>Location: {props.city}</p></li>}
            {props.temprature  && <li className="list-group-item"><p>Temprature: {props.temprature}</p></li>}
            {props.humidity && <li className="list-group-item"> <p>Humidity: {props.humidity}</p></li>}
            {props.description && <li className="list-group-item"><p>Description: {props.description}</p></li>}
            {props.error && <li className="list-group-item"><p>{props.error}</p></li>}
            </ul>
            </div>}
        </div>

      </div>
);




export default Weather;
