import "./styles.css";
import getWeather from "./apiCalls";

const container = document.getElementById("container");

getWeather("London,uk", (data) => {
  container.innerText = data.main.temp;
});
