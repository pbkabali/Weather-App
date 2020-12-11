import getWeatherByCityName, { getWeatherByCoord } from "./apiCalls";
import extractWeatherData from "./processData";

const requestData = (method) => {
  const dataDiv = document.getElementById("data-div");
  let getWeather;
  if (method === "name") {
    const cityName = document.getElementById("name").value;
    getWeather = getWeatherByCityName(cityName, "metric");
  } else if (method === "coordinates") {
    const lat = document.getElementById("latitude").value;
    const lon = document.getElementById("longitude").value;
    getWeather = getWeatherByCoord(lat, lon, "metric");
  }
  getWeather.then((response) => {
    const {
      name,
      country,
      condition,
      temperature,
      pressure,
      humidity,
      windSpeed,
    } = extractWeatherData(response);
    dataDiv.innerHTML = `<h1>Weather information for ${name}, ${country}</h1>
      <p><span class = "property">Name: </span>${name}</p>
      <p><span class = "property">Country code: </span>${country}</p>
      <p><span class = "property">General weather condition: </span>${condition}</p>
      <p><span class = "property">Temperature: </span>${temperature}</p>
      <p><span class = "property">Pressure: </span>${pressure}</p>
      <p><span class = "property">Humidity: </span>${humidity}</p>
      <p><span class = "property">Wind speed: </span>${windSpeed}</p>
    `;
  });
};

export default requestData;
