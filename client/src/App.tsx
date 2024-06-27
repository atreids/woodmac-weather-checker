import { useEffect, useState } from "react";
import getLocalWeather from "./service/weather";

interface WeatherDisplayProps {
  location: string;
}
interface ButtonRow {
  updateLocation: (params: string) => void;
}

interface ButtonProps extends ButtonRow {
  location: string;
}

const WeatherDisplay = ({ location }: WeatherDisplayProps) => {
  const [temp, setTemp] = useState<number>(0);

  useEffect(() => {
    getLocalWeather(location).then((weatherObject) => {
      setTemp(weatherObject.temperature);
    });
  }, [location]);

  const tappsaff = (temp: number) => {
    return temp > 15 ? "tapps aff" : "tapps awn";
  };

  return (
    <>
      <h1>{tappsaff(temp)}</h1>
      <p>
        Temperature in {location} is: {temp} C
      </p>
    </>
  );
};

const Button = ({ location, updateLocation }: ButtonProps) => {
  return <button onClick={() => updateLocation(location)}>{location}</button>;
};

const LocationButtons = ({ updateLocation }: ButtonRow) => {
  return (
    <>
      <Button location="Glasgow" updateLocation={updateLocation} />
      <Button location="Stirling" updateLocation={updateLocation} />
      <Button location="Edinburgh" updateLocation={updateLocation} />
    </>
  );
};

function App() {
  const [location, setLocation] = useState<string>("Glasgow");

  const updateLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <div className="App">
      <WeatherDisplay location={location} />
      <LocationButtons updateLocation={updateLocation} />
    </div>
  );
}

export default App;
