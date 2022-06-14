const express = require("express");
const app = express();
const PORT = 3001;

let weatherData = [
  {
    temperature: 16,
    location: "glasgow",
  },
  {
    temperature: 12,
    location: "edinburgh",
  },
  {
    temperature: 14,
    location: "south glasgow",
  },
  {
    temperature: 13,
    location: "stirling",
  },
];

app.get("/", (request, response) => {
  response.send(`Weather API server currently running on port ${PORT}`);
});

app.get("/api/weather/:location", (request, response) => {
  const location = request.params.location;
  const localWeatherData = weatherData.find((n) => n.location === location);
  response.json(localWeatherData);
});

app.get("/api/weather", (request, response) => {
  response.json(weatherData);
});

app.listen(PORT, () => {
  console.log(`Weather API running on port ${PORT}`);
});
