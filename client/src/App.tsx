import React, { useEffect, useState } from "react";
import getLocalWeather from "./service/weather";

const WeatherDisplay = () => {
  const [temp, setTemp] = useState<number>(0);

  useEffect(() => {
    getLocalWeather("glasgow").then((weatherObject) => {
      setTemp(weatherObject.temperature);
    });
  }, []);

  const tappsaff = (temp: number) => {
    return temp > 15 ? "tapps aff" : "tapps awn";
  };

  return (
    <>
      <h1>{tappsaff(temp)}</h1>
      <p>Temperature in Glasgow is: {temp} C</p>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <WeatherDisplay />
    </div>
  );
}

export default App;
