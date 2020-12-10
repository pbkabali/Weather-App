import "./styles.css";
import getWeatherByCityName, {
  getWeatherByCoord,
  getWeatherByCityId,
} from "./apiCalls";

const container = document.getElementById("container");

getWeatherByCityName("kampala", "metric", (data) => {
  container.innerText = data.main.temp;
});

getWeatherByCoord(0.3476, 32.5825, "metric", (data) => {
  const weather = document.createElement("h3");
  weather.innerText = data.main.temp;
  container.appendChild(weather);
});

getWeatherByCityId(443339, "metric", (data) => {
  const weather = document.createElement("h3");
  weather.innerText = data.main.temp;
  container.appendChild(weather);
});
