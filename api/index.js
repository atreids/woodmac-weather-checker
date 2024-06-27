const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());

let weatherData = [
  {
    temperature: 24,
    location: "Glasgow",
  },
  {
    temperature: 16,
    location: "Edinburgh",
  },
  {
    temperature: 14,
    location: "South glasgow",
  },
  {
    temperature: 14,
    location: "Stirling",
  },
];

app.get("/", (_request, response) => {
  response.send(`Weather API server currently running on port ${PORT}`);
});

app.get("/api/weather/:location", (request, response) => {
  const location = request.params.location;

  const localWeatherData = weatherData.find(
    (place) => place.location === location
  );

  response.json(localWeatherData);
});

app.get("/api/weather", (_request, response) => {
  response.json(weatherData);
});

app.listen(PORT, () => {
  console.log(`
  -----------------------------------
   Weather API running on port ${PORT}
  -----------------------------------
  `);
});
