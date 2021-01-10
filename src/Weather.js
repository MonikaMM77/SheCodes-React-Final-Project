import React from "react";
import "./Weather.css";

export default function Weather() {
	return <div className="Weather">
		<form>
			<div className="row">
				<div className="col-9">
					<input type="search" placeholder="Enter a city..." className="form-control"/>
				</div>
				<div className="col-3">
					<button className="btn btn-primary">Search</button>
				</div>
			</div>
		</form>
		<h1>New York</h1>
		<ul>
			<li>Wednesday 7:00</li>
			<li>Mostly Sunny</li>
		</ul>
		<div className="row">
			<div className="6-col">
				<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Sunny"/>
				6°C
			</div>
			<div className="6-col">
				<ul>
					<li>Precipitation: 0%</li>
					<li>Humidity: 41%</li>
					<li>Wind 8 km/h</li>
				</ul>
			</div>
		</div>
	</div>
} 