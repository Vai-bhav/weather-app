import React from 'react';
import { Container } from 'react-bootstrap';

const CityWeather = ({cityWeather,click}) => {
    // const [city,setCity]=React.useState("");
    // const [humidity,setHumidity]=React.useState("");
    // const [temperature,setTemperature]=React.useState("");
    // const [feelsLike,setFeelsLike]=React.useState("");
    // const [minTemperature,setMinTemperature]=React.useState("");
    // const [maxTemperature,setMaxTemperature]=React.useState("");
    // const [visibility,setVisibility]=React.useState("");
    // const [windSpeed,setWindSpeed]=React.useState("");
    const [weather,setWeather]=React.useState({
        city: "",
        humidity: "",
        temperature: "",
        feelsLike: "",
        minTemperature: "",
        maxTemperature: "",
        visibility: "",
        windSpeed: "",
    });

    React.useEffect(()=>{
        console.log("city Weather ",cityWeather);
        if(click && cityWeather.hasOwnProperty('weather')){
            // setCity(cityWeather.name);
            // setHumidity(cityWeather.main.humidity+" %");
            // setTemperature((cityWeather.main.temp-273.15).toFixed(2)+` \u00b0C`);
            // setFeelsLike((cityWeather.main.feels_like-273.15).toFixed(2)+` \u00b0C`);
            // setMinTemperature((cityWeather.main.temp_min-273.15).toFixed(2)+` \u00b0C`);
            // setMaxTemperature((cityWeather.main.temp_max-273.15).toFixed(2)+` \u00b0C`);
            // setVisibility((parseInt(cityWeather.visibility)/1000).toFixed(2)+" km");
            // setWindSpeed((cityWeather.wind.speed)+" km/h");
            setWeather({
                city: cityWeather.name,
                humidity: cityWeather.main.humidity+" %",
                temperature: (cityWeather.main.temp-273.15).toFixed(2)+` \u00b0C`,
                feelsLike: (cityWeather.main.feels_like-273.15).toFixed(2)+` \u00b0C`,
                minTemperature: (cityWeather.main.temp_min-273.15).toFixed(2)+` \u00b0C`,
                maxTemperature: (cityWeather.main.temp_max-273.15).toFixed(2)+` \u00b0C`,
                visibility: (parseInt(cityWeather.visibility)/1000).toFixed(2)+" km",
                windSpeed: (cityWeather.wind.speed)+" km/h",
            })
        }
    },[cityWeather]);
    return (
        <Container>
            <div>
                <div className="d-flex justify-content-between flex-wrap">
                    <p className="d-inline p-4">City Name: {weather.city}</p>
                    <p className="d-inline p-4">Humidity: {weather.humidity}</p>
                    <p className="d-inline p-4">Temperature: {weather.feelsLike}</p>
                    <p className="d-inline p-4">Feels Like: {weather.temperature}</p>
                    <p className="d-inline p-4">Minimum Temperature: {weather.minTemperature}</p>
                    <p className="d-inline p-4">Maximum Temperature: {weather.maxTemperature}</p>
                    <p className="d-inline p-4">Visibility: {weather.visibility}</p>
                    <p className="d-inline p-4">Wind Speed: {weather.windSpeed}</p>
                </div>
            </div>
        </Container>
    );
};

export default CityWeather;