const celciusSwitchLabel = "Fahrenheit scale";
const fahrenheitSwitchLabel = "Celcius scale";
const celciusUnits = "\u2103";
const fahrenheitUnits = "\u2109;";

let celciusTemp = "";

window.changeScale = () => {
  const temperature = document.getElementById("temperature");
  const tempSwitch = document.getElementById("temp-switch");
  const tempUnits = document.getElementById("temp-units");
  if (parseFloat(celciusTemp) === parseFloat(temperature.innerText)) {
    const fahrenheit = (celciusTemp * 9) / 5 + 32;
    temperature.innerText = fahrenheit.toFixed(2);
    tempUnits.innerText = fahrenheitUnits;
    tempSwitch.innerHTML = fahrenheitSwitchLabel;
  } else {
    temperature.innerText = celciusTemp;
    tempUnits.innerText = celciusUnits;
    tempSwitch.innerHTML = celciusSwitchLabel;
  }
};

const weatherCard = (props) => {
  const {
    main,
    name,
    country,
    condition,
    temperature,
    pressure,
    humidity,
    windSpeed,
  } = props;
  celciusTemp = temperature;

  let weatherColor;

  switch (main.toLowerCase()) {
    case "clear":
      weatherColor = "clear-weather";
      break;
    case "clouds":
      weatherColor = "cloudy-weather";
      break;
    case "rain":
      weatherColor = "rainy-weather";
      break;
    case "sun":
      weatherColor = "sunny-weather";
      break;
    default:
      weatherColor = "calm-weather";
  }

  return `<div class="${weatherColor} flex data-section">
    <h1 class="text-margin">Weather information for ${name}, ${country}</h1>
    <div class="text-margin weather-details">
      <p class="bottom-margin"><span class = "property">Name: </span>${name}</p>
      <p class="bottom-margin"><span class = "property">Country code: </span>${country}</p>
      <p class="bottom-margin"><span class = "property">General weather condition: </span>${condition}</p>
      <p class="bottom-margin">
        <span class = "property">Temperature: </span>
        <span id = "temperature">${temperature}</span>
        <span id = "temp-units">${celciusUnits}</span>
        <span id = "temp-switch" class = "temp-switch" onclick="changeScale()" >${celciusSwitchLabel}</span>
      </p>
      <p class="bottom-margin"><span class = "property">Pressure: </span>${pressure} Pa</p>
      <p class="bottom-margin"><span class = "property">Humidity: </span>${humidity} %</p>
      <p class="bottom-margin"><span class = "property">Wind speed: </span>${windSpeed} km/hr</p>
    </div>
  </div>
`;
};

export default weatherCard;
