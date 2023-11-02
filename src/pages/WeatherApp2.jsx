import React, { useEffect, useState } from 'react';
import Menu from '../component/Menu';
import axios from 'axios';
import '../Weather1.css'

import search_icon from "../assets/we2/search.png";
import wind_icon from "../assets/we2/wind.png";
import humidity_icon from "../assets/we2/humidity.png";
import clear_icon from "../assets/we2/clear.png";
import cloud_icon from "../assets/we2/cloud.png";
import drizzle_icon from "../assets/we2/drizzle.png";
import rain_icon from "../assets/we2/rain.png";
import snow_icon from "../assets/we2/snow.png";

const WeatherApp2 = () => {

    const[data, setData] = useState({
        celcius: 10,
        Name: 'London',
        humidity: 10,
        speed: 2,
        // image: '../assets/we2/cloud.png'
    })

    const [name, setName]= useState('');
    // useEffect(()=> {
    //     const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=london&units=Metric&appid=2cdadcc0ee14321158349b4b502141a4';
    //     axios.get(apiUrl)
    //     //.then(res => console.log(res.data))
    //     .then(res => {
    //         setData({...data, celcius: res.data.main.temp, name:res.data.name, humidity:res.data.main.humidity, 
    //         speed: res.data.wind.speed})
    //     })
    //     .catch(err => console.log(err));
    // },[])

    const search = ()=>{
        if(name !== ""){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=Metric&appid=2cdadcc0ee14321158349b4b502141a4`;
            axios.get(apiUrl)
            .then(res => console.log(res.data))
            .then(res => {
                let imagePath = '';
                if(res.data.weather[0].main == "Clouds"){
                    imagePath = "../assets/we2/cloud.png"
                }
                else if(res.data.weather[0].main == "Clear"){
                    imagePath = "../assets/we2/clear.png"
                }
                else if(res.data.weather[0].main == "Rain"){
                    imagePath = "../assets/weather2/rain.png"
                }
                else if(res.data.weather[0].main == "Drizzle"){
                    imagePath = "../assets/weather2/drizzle.png"
                }
                //else if(res.data.weather[0].main == "Mist"){
                    //imagePath = "../assets/weather2/cloud.png"
                //}
                else{
                    imagePath = "../assets/weather2/cloud.png"
                }
                //console.log(res.data))
                setData({...data, celcius: res.data.main.temp, name:res.data.name, humidity:res.data.main.humidity, 
                speed: res.data.wind.speed, image: imagePath})
            })
            .catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Menu/>
            <h1>Weather App TWO</h1>
            <div className='container'>
                <div className='top-bar'>
                    <input type="text" className="cityInput" placeholder='Search' onChange={ e=> setName(e.target.value) } />
                    <div className="search-icon" onClick={()=>{search}} >
                        <img src={search_icon} alt='search' />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={cloud_icon} alt='search' />
                    {/* <img src={data.image} alt='search' /> */}
                </div>
                <div className="weather-temp">{data.celcius}°C</div>
                <div className="weather-location">{data.name}</div>
                <div className="data-container">
                    <div className="element">
                        <img src={ humidity_icon } alt="" className="icon" />
                        <div className="data">
                            <div className="humidity-percent">{data.humidity}%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                    <div className="element">
                        <img src={wind_icon} alt="" className="icon" />
                        <div className="data">
                            <div className="wind-rate">{data.speed} km/h</div>
                            <div className="text">Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeatherApp2;