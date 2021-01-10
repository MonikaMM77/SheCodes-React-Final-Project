import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Monika Mitka and is <a href="https://github.com/MonikaMM77/SheCodes-React-Final-Project" target="_blank">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}

