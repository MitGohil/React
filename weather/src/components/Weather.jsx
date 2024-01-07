import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import "../App.css"
import sunrise from "../assets/icons8-sunrise.gif"
import sunset from "../assets/icons8-sunset.gif"
import temp from "../assets/temperature.png"
import location from "../assets/location.gif"

const Weather = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [pastdays, setPastdays] = useState([]);
  const [today, setToday] = useState("")
  const [show, setShow] = useState(true);
  const apiKey = "89801ae1a56942bab47162736240601";

  // Get Live location
  useEffect(() => {
    const getCurrentLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async function (position) {
          // console.log(position);
          const geoLocationApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
          const geoLocationResponse = await fetch(geoLocationApiUrl);
          const geoLocationResjson = await geoLocationResponse.json();
          console.log(geoLocationResjson);
          setSearch(geoLocationResjson.city);
          setToday(formatDate(new Date()));
        });
      } else {
        console.log("Geolocation is not available in your browser.");
      }
    }
    getCurrentLocation();
  }, []);

  // get weatherdata from input
  useEffect(() => {
    const timeOut = setTimeout(() => getWeather(), 500);
    return () => clearTimeout(timeOut);
  }, [search]);


  // Get weather data
  const getWeather = async () => {
    try {
      if (search.length > 0) {
        setPastdays([]);
        const weatherApiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${search}`;
        const weatherResponse = await fetch(weatherApiUrl);
        const WeatherResjson = await weatherResponse.json();
        console.log(WeatherResjson);
        let todayWeather = {
          temp: WeatherResjson.current.temp_c,
          icon: WeatherResjson.current.condition.icon,
          condition: WeatherResjson.current.condition.text,
          sunrise: convertTime(WeatherResjson.forecast.forecastday[0].astro.sunrise),
          sunset: convertTime(WeatherResjson.forecast.forecastday[0].astro.sunset)
        }
        setData(todayWeather);
        getHistory();
        setShow(true)
      }
    } catch (error) {
    }
  };


  // Time convertor from 12 to 24 hour
  const convertTime = timeStr => {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };

  function formatDate(value) {
    let date = new Date(value);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: '2-digit' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return day + '-' + month + '-' + year;
  }

  // Get Past 7 days history
  const getHistory = async () => {
    for (let i = 7; i >= 1; i--) {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - i);
      // let stringDate = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
      let paramDate = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
      const historyApiUrl = `http://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${search}&dt=${paramDate}`;
      const historyResponse = await fetch(historyApiUrl);
      const historyresjson = await historyResponse.json();
      let dayForcast = {
        date: formatDate(currentDate),
        dayName: currentDate.toLocaleDateString("en", { weekday: 'short' }),
        temp: historyresjson.forecast.forecastday[0].day.avgtemp_c,
        sunrise: convertTime(historyresjson.forecast.forecastday[0].astro.sunrise),
        sunset: convertTime(historyresjson.forecast.forecastday[0].astro.sunset)
      };
      setPastdays(current => [...current, dayForcast]);
    }
    console.log(pastdays);
  };

  // Show history data
  const handleOnShow = () => {
    setShow(!show);
  };

  return (
    <div className='weather-app'>
      <h1 className='heading' >Weather on {today}</h1>

      <div className="w-25 mx-auto">
        {/* <input type="text" name="" className='w-50 seacrCity' placeholder="Enter City name" id="" value={search}
          onChange={event => setSearch(event.target.value)} /> */}
        <MDBInput className='mb-1 seacrCity' type='text' label='City Name' placeholder="Enter City name" value={search}
          onChange={event => setSearch(event.target.value)} />
      </div>

      {
        !search ? (<h2>Data not found</h2>) :
          (<div className="weather gap-5">
            <h1 className="city my-3"><img src={location} alt='' className=' rounded-circle' /> = {search}</h1>

            <div className='d-flex justify-content-center gap-5 my-3'>
              <h2 className="temp"><img src={temp} alt='' className=' rounded-circle' /> = {data.temp}°c</h2>
              <h2 className="temp"><img src={data.icon} alt="" /> {data.condition} </h2>
            </div>

            <div className='d-flex justify-content-center gap-5 my-3'>
              <h2><img src={sunrise} alt='' className=' rounded-circle' /> = {data.sunrise}</h2>
              <h2><img src={sunset } alt='' className=' rounded-circle' /> = {data.sunset}</h2>
            </div>

            <MDBBtn onClick={handleOnShow} className='view'>View Last 7 days data</MDBBtn>
            {/* <div className="p-3 py-5 d-flex justify-content-between  gap-3 " > */}
            <div className={`slide-up-container ${show ? 'visible' : ''} p-3 py-5 d-flex justify-content-between  gap-3`}>
              {
                pastdays.map((e) => (
                  <MDBCard className='bg-info  rounded-7 border border-dark card'>
                    <MDBCardBody>
                      <MDBCardTitle className='fw-bold text-black'>{e.date}</MDBCardTitle>
                      <MDBCardText>
                        <h6>{e.dayName}</h6>
                        <h6 className='fw-bold text-black'><img src={temp} alt='' className='w-25 rounded-circle' /> = {e.temp}°c</h6>
                        <h6><img src={sunrise} alt='' className='w-25 rounded-circle' /> = {e.sunrise}</h6>
                        <h6><img src={sunset} alt='' className='w-25 rounded-circle' /> = {e.sunset}</h6>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>

                ))
              }
            </div>
            {/* </div> */}
          </div>)
      }
    </div>
  )
}

export default Weather
