import React, { Component } from 'react';
import './App.css';
import Title from "./components/title";
import Form from "./components/form";
import Weather from "./components/weather";
import Footer from "./components/footer";

const API_KEY = "8c679e7fb556ba43b9f82a3845265f46";

class App extends Component {

    state ={
      temprature: undefined,
      city: undefined,
      description: undefined,
      country: undefined,
      humidity: undefined,
      icon: undefined,
      error: undefined
    }

  getWeather = async (e)=> {
    
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}id=524901&units=metric&APPID=${API_KEY}`);
    const data = await api_call.json();

    if(city && country){
      console.log(data);
      this.setState({
        temprature : data.main.temp,
        humidity: data.main.humidity,
        city : data.name,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        error : ""
      })
    }else{
      console.log(data);
      this.setState({
        temprature : undefined,
        humidity: undefined,
        city : undefined,
        description: undefined,
        icon : undefined,
        error : "Please enter some values"
      });
    }
  
  }

  render() {
    return (
      <div className="App container">
      <div className="row">
        <div className="col-12">
        <Title/>
        <Form getWeather={this.getWeather}/>
        <Weather
        city={this.state.city} 
        temprature={this.state.temprature}
        humidity={this.state.humidity}
        description={this.state.description}
        icon={this.state.icon}
        error = {this.state.error}
        />
       
        </div>
      </div>
       <Footer/>
      </div>
    );
  }
};

export default App;
