import "./styles.css";
import getWeatherByCityName, {
  getWeatherByCoord,
  getWeatherByCityId,
} from "./apiCalls";
import extractWeatherData from "./processData";

const container = document.getElementById("container");

const getWeather = getWeatherByCityName("kampala", "metric");
getWeather.then((response) => {
  const { condition } = extractWeatherData(response);
  container.innerText = condition;
});

// getWeatherByCoord(0.3476, 32.5825, "metric", (data) => {
//   const weather = document.createElement("h3");
//   weather.innerText = data.main.temp;
//   container.appendChild(weather);
// });

// getWeatherByCityId(443339, "metric", (data) => {
//   console.log(extractWeatherData(data));
// });
