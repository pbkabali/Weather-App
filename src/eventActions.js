import getWeatherByCityName, { getWeatherByCoord } from './apiCalls';
import extractWeatherData from './processData';
import weatherCard from './weatherCard';
import { openNotice } from './notice';

const toggleLoading = () => {
  const loading = document.getElementById('loading-component');
  loading.classList.toggle('display-none');
};

const requestData = (method) => {
  const dataDiv = document.getElementById('data-div');
  toggleLoading();
  let getWeather;
  if (method === 'name') {
    const cityName = document.getElementById('name').value;
    getWeather = getWeatherByCityName(cityName, 'metric');
  } else if (method === 'coordinates') {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    getWeather = getWeatherByCoord(lat, lon, 'metric');
  }
  getWeather
    .then((response) => {
      if (response.cod === 200) {
        dataDiv.innerHTML = weatherCard(extractWeatherData(response));
      } else {
        openNotice(`Oops! ${response.message}`);
      }
      toggleLoading();
    })
    .catch((err) => {
      openNotice(`Oops! ${err}`);
      toggleLoading();
    });
};

export default requestData;
