import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
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
			iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
		});
	}

	if (weatherData.ready) {
		return <div className="Weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input type="search" placeholder="Enter a city..." className="form-control" autoFocus={true}/>
					</div>
					<div className="col-3">
						<button className="btn btn-primary w-100">Search</button>
					</div>
				</div>
			</form>
			<h1>{weatherData.city}</h1>
			<ul>
				<li><FormattedDate date={weatherData.date} /></li>
				<li className="text-capitalize">{weatherData.description}</li>
			</ul>
			<div className="row mt-3">
				<div className="col-6">
					<div className="clearfix">
						<img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
						<div className="float-left">
							<span className="temperature">{Math.round(weatherData.temperature)}</span>
							<span className="unit">°C</span>
						</div>
					</div>
				</div>
				<div className="col-6">
					<ul>
						<li>Humidity: {weatherData.humidity}%</li>
						<li>Wind: {weatherData.wind} km/h</li>
					</ul>
				</div>
			</div>
		</div>
	} else {
		const apiKey = "30d51b8f5d573674a85c2b8f5f80916d";
		let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
		axios.get(apiUrl).then(handleResponse);

		return(`Loading weather for ${props.defaultCity}...`);
	}	
} 