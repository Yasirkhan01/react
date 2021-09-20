
import './App.css';
import React, { useState, useEffect } from "react"
import axios from 'axios';
import {Button} from 'react-bootstrap';

function App() {

  const [City,setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if(City!=null){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`)
      .then((res) => {
        console.log(res.data)
        const newWeather = res.data;
        setWeather(newWeather);
      }).catch((err) => { console.log(err)})}
  },[City]);

  return (<div id="main">
    
    <div id="inner">
    <h1>Wheather Application</h1>
      <input type='txt' id='in'/>
      <Button id='bu' variant = "danger" onClick={()=>{setCity(document.getElementById('in').value);   }}>Search</Button>
    
      
      <h1>City Name : {weather?.name}</h1>
      <h2>Temperature : {weather?.main?.temp}		&nbsp;<sup>o</sup>C</h2>
      <h2>Humidity : {weather?.main?.humidity}</h2>
      <h2>Feel Temperature : {weather?.main?.feels_like}</h2>
      <h2>Country : {weather?.sys?.country}</h2>
    
    </div>
    </div>
  );

}

export default App;
