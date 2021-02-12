import React from 'react';
import { Container } from 'react-bootstrap';

const CityWeather = ({cityWeather,click}) => {
    // console.log("abcd",weatherDes);
    const [city,setCity]=React.useState("");
    const [humidity,setHumidity]=React.useState("");
    const [temperature,setTemperature]=React.useState("");
    const [feelsLike,setFeelsLike]=React.useState("");
    const [minTemperature,setMinTemperature]=React.useState("");
    const [maxTemperature,setMaxTemperature]=React.useState("");
    const [visibility,setVisibility]=React.useState("");
    const [windSpeed,setWindSpeed]=React.useState("");

    React.useEffect(()=>{
        console.log("city Weather ",cityWeather);
        if(click && cityWeather.hasOwnProperty('weather')){
            setCity(cityWeather.name);
            setHumidity(cityWeather.main.humidity+" %");
            setTemperature((cityWeather.main.temp-273.15).toFixed(2)+` \u00b0C`);
            setFeelsLike((cityWeather.main.feels_like-273.15).toFixed(2)+` \u00b0C`);
            setMinTemperature((cityWeather.main.temp_min-273.15).toFixed(2)+` \u00b0C`);
            setMaxTemperature((cityWeather.main.temp_max-273.15).toFixed(2)+` \u00b0C`);
            setVisibility((parseInt(cityWeather.visibility)/1000).toFixed(2)+" km");
            setWindSpeed((cityWeather.wind.speed)+" km/h");
        }
    })
    return (
        <Container>
            <div>
                <div className="d-flex justify-content-between flex-wrap">
                    <p className="d-inline p-4">City Name: {city}</p>
                    <p className="d-inline p-4">Humidity: {humidity}</p>
                    <p className="d-inline p-4">Temperature: {feelsLike}</p>
                    <p className="d-inline p-4">Feels Like: {temperature}</p>
                    <p className="d-inline p-4">Minimum Temperature: {minTemperature}</p>
                    <p className="d-inline p-4">Maximum Temperature: {maxTemperature}</p>
                    <p className="d-inline p-4">Visibility: {visibility}</p>
                    <p className="d-inline p-4">Wind Speed: {windSpeed}</p>
                </div>
            </div>
        </Container>
    );
};

export default CityWeather;