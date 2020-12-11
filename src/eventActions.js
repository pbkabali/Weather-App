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
    const { condition, country } = extractWeatherData(response);
    dataDiv.innerText = condition + " " + country;
  });
};

export default requestData;
