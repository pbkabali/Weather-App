import "./styles.css";
import getWeatherByCityName, {
  getWeatherByCoord,
  getWeatherByCityId,
} from "./apiCalls";
import extractWeatherData from "./processData";

const container = document.getElementById("container");

getWeatherByCityName("kosovo", "metric", (data) => {
  container.innerText = data.main.temp;
});

getWeatherByCoord(0.3476, 32.5825, "metric", (data) => {
  const weather = document.createElement("h3");
  weather.innerText = data.main.temp;
  container.appendChild(weather);
});

getWeatherByCityId(443339, "metric", (data) => {
  console.log(extractWeatherData(data));
});
