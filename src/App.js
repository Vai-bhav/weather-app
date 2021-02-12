import FigureCaption from 'react-bootstrap/esm/FigureCaption';
import './App.css';
import React from "react";
import CityInput from './components/CityInput';
import CityWeather from './components/CityWeather';

function App() {
  const [city,setCity]=React.useState("");
  const [cityWeather,setCityWeather]=React.useState({});
  const [click,setClick]=React.useState(false);
  
  const fetchCityWeather=()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=963424f43671e87392a23f7c94544f2c`
    )
      .then((response) => response.json())
      .then((result)=>{
        // console.log("Result is result",result);
        setCityWeather(result);
      })
      .catch((error)=>{
        console.log("Error is ",error);
      })
  }
  return (
    <>
      <h3 className="text-center text-info">Weather App</h3>
      <CityInput 
        city={city} 
        setCity={setCity} 
        fetchCityWeather={fetchCityWeather} 
        click={click}
        setClick={setClick}
      />
      <CityWeather cityWeather={cityWeather} click={click} />
    </>
  );
}

export default App;
