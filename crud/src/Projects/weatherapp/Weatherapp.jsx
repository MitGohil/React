import React, { useEffect, useState } from 'react'
import "../Projects.css"
import humidity1 from "./img/humidity.png"
import wind1 from "./img/wind.png"
import pressure1 from "./img/pressure.png"
import search1 from "./img/search.png"
import rain from "./img/rain.png"
import clouds from "./img/clouds.png"
import Clear from "./img/clear.png"
import Drizzle from "./img/drizzle.png"
import Mist from "./img/mist.png"
const Weather = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("")
    const [speed, setSpeed] = useState(null)
    // const [weatherIcon, setWeatherIcon] = useState(rain)
    const apiKey = "de875e9664c4cb49c08b83bad5e71079";


    useEffect(() => {
        const searchCity = async () => {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${search}&appid=${apiKey}`;
            const response = await fetch(apiUrl);
            const resjson = await response.json();
            setCity(resjson.main)
            console.log(resjson);
        }
        searchCity()
    }, [search])

    return (
        <>
            <div className="card">
                <div className="search">
                    <input type="text" name="" placeholder="Enter City name" id="" onChange={(e) => setSearch(e.target.value)} />
                </div>
                {
                    !city ? (<h2>Data not found</h2>) :
                        (<div className="weather">
                            {/* <img src={weatherIcon} className="weather-icon" /> */}
                            <h1 className="temp">{city.temp}°c</h1>
                            <h2 className="city">{search}</h2>
                            <div className="details">
                                <div className="col">
                                    <img src={humidity1} />
                                    <div>
                                        <p className="humidity">{city.humidity} %</p>
                                        <p>Humidity </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src={pressure1} />
                                    <div>
                                        <p className="pressure">{city.pressure} Pa</p>
                                        <p>Atmospheric Pressure</p>
                                    </div>
                                </div>
                                {/* <div className="col">
                                    <img src={wind1} />
                                    <div>
                                        <p className="wind">{wind.wind} kmph</p>
                                        <p>Wind speed</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>)
                }
            </div>
        </>
    );
}

export default Weather;