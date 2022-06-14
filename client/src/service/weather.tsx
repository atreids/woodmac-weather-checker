import axios from "axios";
const url = "http://localhost:3001/api/weather";

const getLocalWeather = (location: string) => {
  const request = axios.get(url + "/" + location);
  return request.then((response) => response.data);
};

export default getLocalWeather;
