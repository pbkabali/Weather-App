import getWeatherByCityName from "./apiCalls";
import extractWeatherData from "./processData";

const requestData = () => {
  const dataDiv = document.getElementById("data-div");
  const cityName = document.getElementById("name").value;
  const getWeather = getWeatherByCityName(cityName, "metric");
  getWeather.then((response) => {
    const { condition } = extractWeatherData(response);
    dataDiv.innerText = condition;
  });
};

export default requestData;
