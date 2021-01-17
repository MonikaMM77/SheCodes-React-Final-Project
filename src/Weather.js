import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);
	function handleResponse(response) {
		console.log(response.data);
		setWeatherData({
			ready: true,
			temperature: response.data.main.temp,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			description: response.data.weather[0].description,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: response.data.weather[0].icon
		});
	}

	function search(city) {
		const apiKey = "30d51b8f5d573674a85c2b8f5f80916d";
		let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search(city);
	}

	function handleCityChange(event) {
		setCity(event.target.value);
	}

	if (weatherData.ready) {
		return <div className="Weather">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-9">
						<input type="search" placeholder="Enter a city..." className="form-control" autoFocus={true} onChange={handleCityChange}/>
					</div>
					<div className="col-3">
						<button className="btn btn-primary w-100">Search</button>
					</div>
				</div>
			</form>
			<WeatherInfo data={weatherData}/>
			<WeatherForecast city={weatherData.city}/>
		</div>
	} else {
		search(props.defaultCity);
		return(`Loading weather for ${props.defaultCity}...`);
	}	
} 